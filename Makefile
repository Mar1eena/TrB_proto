.PHONY: gene desc buf login logout publish

PROTOC     := protoc
PROTO_PATH := ./services
GEN_GO     := ./gen/go
GEN_JS     := ./gen/js-ts

PROTOS := \
	$(PROTO_PATH)/example/*.proto \
	$(PROTO_PATH)/tinvest/*.proto \
	$(PROTO_PATH)/nats/*.proto \
	$(PROTO_PATH)/moex/*.proto \
	$(PROTO_PATH)/clickhouse/*.proto \
	$(PROTO_PATH)/clickhouse_manager/*.proto \
	$(PROTO_PATH)/manager_indicators/*.proto \
	$(PROTO_PATH)/db_api/*.proto

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
		$(PROTO_PATH)/nats/*.proto \
		--include_imports --include_source_info \
		--descriptor_set_out=./gen/desc/trb_proto.pb

buf:
	buf generate

login:
	npm login

logout:
	npm logout

publish:
	npm publish

