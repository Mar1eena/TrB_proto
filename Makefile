

# make gen service='Название сервиса'
gene:
	protoc -I./services \
	./services/example/*.proto \
	./services/tinvest/*.proto \
	./services/nats/*.proto \
	./services/moex/*.proto \
	./services/clickhouse/*.proto \
	./services/manager_indicators/*.proto \
	--go_out=./gen/go  \
	--go_opt=paths=source_relative \
	--go-grpc_out=./gen/go/ \
	--go-grpc_opt=paths=source_relative \
	--grpc-gateway_out=./gen/go \
	--grpc-gateway_opt=paths=source_relative \
	--js_out=import_style=commonjs,binary:./gen/js-ts \
	--grpc-web_out=import_style=typescript,mode=grpcweb:./gen/js-ts \
	--include_imports --include_source_info --descriptor_set_out=./gen/desc/trb_protos.pb 

desc: 
	protoc -I./services \
	./services/example/*.proto \
	./services/tinvest/*.proto \
	./services/nats/*.proto \
	--include_imports --include_source_info --descriptor_set_out=./gen/desc/trb_proto.pb

buf:
	buf generate

# JavaScript (google-protobuf / commonjs) → gen/js
gen-js:
	protoc -I./services \
	./services/example/*.proto \
	./services/tinvest/*.proto \
	./services/nats/*.proto \
	./services/moex/*.proto \
	./services/clickhouse/*.proto \
	./services/manager_indicators/*.proto \
	./services/google/api/*.proto \
	--js_out=import_style=commonjs,binary:./gen/js

# TypeScript (protobuf-es) → gen/ts
gen-ts:
	npm install
	npm run gen:es
	