

# make gen service='Название сервиса'
gene:
	protoc -I./services \
	./services/servicexamle/*.proto \
	./services/tinvest/*.proto \
	./services/nats/*.proto \
	./services/MOEX/*.proto \
	--go_out=./gen/go  \
	--go_opt=paths=source_relative \
	--go-grpc_out=./gen/go/ \
	--go-grpc_opt=paths=source_relative \
	--grpc-gateway_out=./gen/go \
	--grpc-gateway_opt=paths=source_relative \
	--include_imports --include_source_info --descriptor_set_out=./gen/desc/trb_protos.pb 

desc: 
	protoc -I./services \
	./services/servicexamle/*.proto \
	./services/tinvest/*.proto \
	./services/nats/*.proto \
	--include_imports --include_source_info --descriptor_set_out=./gen/desc/trb_proto.pb

buf:
	buf generate

gen-js:
	protoc --js_out=import_style=commonjs,binary:./gen/js --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./gen/js --proto_path=./proto ./proto/*.proto
	