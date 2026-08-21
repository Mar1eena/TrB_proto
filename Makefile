.PHONY: gene desc buf login logout publish release

PROTOC     := protoc
PROTO_PATH := ./services
GEN_GO     := ./gen/go
GEN_JS     := ./gen/js-ts

PROTOS := $(wildcard \
	$(PROTO_PATH)/tinvest/*.proto \
	$(PROTO_PATH)/api/nats/*.proto \
	$(PROTO_PATH)/clickhouse/*.proto \
	$(PROTO_PATH)/api/clickhouse/*.proto \
	$(PROTO_PATH)/manager_indicators/*.proto \
	$(PROTO_PATH)/api/db_api/*.proto \
	$(PROTO_PATH)/api/test/*.proto \
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

desc:
	$(PROTOC) -I$(PROTO_PATH) \
		$(PROTO_PATH)/example/*.proto \
		$(PROTO_PATH)/tinvest/*.proto \
		$(PROTO_PATH)/api/nats/*.proto \
		--include_imports --include_source_info \
		--descriptor_set_out=./gen/desc/trb_proto.pb

buf:
	buf generate

login:
	npm login

logout:
	npm logout

# make publish
# make publish OTP=123456
# make publish TOKEN=npm_...
publish:
ifneq ($(TOKEN),)
	npm publish --access public --//registry.npmjs.org/:_authToken=$(TOKEN)
else ifneq ($(OTP),)
	npm publish --access public --otp=$(OTP)
else
	npm publish --access public
endif

# Коммит (если MSG=...), bump версии, push. Тег, npm и pkg.go.dev — GitHub Actions
# по коммиту с сообщением vX.Y.Z.
# make release PART=patch MSG="add ClickHouse manager"
PART ?= patch
GIT_NAME  ?= $(shell git log -1 --format=%an)
GIT_EMAIL ?= $(shell git log -1 --format=%ae)
GIT       := git -c user.name="$(GIT_NAME)" -c user.email="$(GIT_EMAIL)"

release:
ifeq ($(strip $(GIT_NAME)),)
	$(error Git author is unknown. Set GIT_NAME and GIT_EMAIL or configure user.name / user.email)
endif
ifdef MSG
	git add -A
	$(GIT) commit -m "$(MSG)"
endif
	npm version $(PART) --no-git-tag-version
	git add package.json package-lock.json
	$(GIT) commit -m "$$(node -p "const v=require('./package.json').version; v.startsWith('v')?v:'v'+v")"
	git push origin HEAD

