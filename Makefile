.PHONY: gene desc buf rel

PROTOC     := protoc
PROTO_PATH := ./services
GEN_GO     := ./gen/go
GEN_JS     := ./gen/js-ts
GEN_PY     := ./gen/python

PROTOS := $(wildcard \
	$(PROTO_PATH)/api/tinvest/*.proto \
	$(PROTO_PATH)/nats/*.proto \
	$(PROTO_PATH)/clickhouse/*.proto \
	$(PROTO_PATH)/instruments/*.proto \
	$(PROTO_PATH)/historiccandle/*.proto \
	$(PROTO_PATH)/postgresql/*.proto \
	$(PROTO_PATH)/indicators/*.proto \
	$(PROTO_PATH)/strategy/*.proto \
)

GOOGLE_API := $(PROTO_PATH)/google/api/*.proto

gene:
	$(PROTOC) -I$(PROTO_PATH) $(PROTOS) \
		--go_out=$(GEN_GO) --go_opt=paths=source_relative \
		--go-grpc_out=$(GEN_GO) --go-grpc_opt=paths=source_relative \
		--grpc-gateway_out=$(GEN_GO) --grpc-gateway_opt=paths=source_relative \
		--js_out=import_style=commonjs,binary:$(GEN_JS) \
		--grpc-web_out=import_style=typescript,mode=grpcweb:$(GEN_JS) \
		--include_imports --include_source_info \
		--descriptor_set_out=./gen/desc/trb_protos.pb
	$(PROTOC) -I$(PROTO_PATH) $(GOOGLE_API) \
		--js_out=import_style=commonjs,binary:$(GEN_JS) \
		--grpc-web_out=import_style=typescript,mode=grpcweb:$(GEN_JS)
	python -m grpc_tools.protoc -I$(PROTO_PATH) \
		$(PROTO_PATH)/indicators/*.proto \
		$(PROTO_PATH)/strategy/*.proto \
		$(PROTO_PATH)/google/api/*.proto \
		--python_out=$(GEN_PY) --pyi_out=$(GEN_PY) \
		--grpc_python_out=$(GEN_PY)

desc:
	$(PROTOC) -I$(PROTO_PATH) \
		$(PROTO_PATH)/api/tinvest/*.proto \
		$(PROTO_PATH)/nats/*.proto \
		--include_imports --include_source_info \
		--descriptor_set_out=./gen/desc/trb_proto.pb

buf:
	buf generate

GIT_NAME  ?= $(shell git log -1 --format=%an)
GIT_EMAIL ?= $(shell git log -1 --format=%ae)
GIT       := git -c user.name="$(GIT_NAME)" -c user.email="$(GIT_EMAIL)"

rel: gene
	go mod tidy
	npm version $(or $(PART),patch) --no-git-tag-version
	node scripts/sync-py-version.cjs
	git add -A
	$(eval VERSION := $(shell node -p "const v=require('./package.json').version; v.startsWith('v')?v:'v'+v"))
	$(GIT) commit -m "$(VERSION)"
	git push origin HEAD