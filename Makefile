# make gen service='Название сервиса'
gen1:
	protoc -I./services \
	./services/*.proto \
	--go_out=./gen/go  \
	--go_opt=module=github.com/Mar1eena/trb_proto/services \
	--go-grpc_out=./gen/go \
	--go-grpc_opt=module=github.com/Mar1eena/trb_proto/services \
	--grpc-gateway_out=./gen/go \
	--grpc-gateway_opt=module=github.com/Mar1eena/trb_proto/services \
	--include_imports --include_source_info --descriptor_set_out=./gen/desc/trb_proto.pb 
buf:
	buf generate

# gen: 
# 	protoc -I. \
# 	./services/$(service)/proto/*.proto \
# 	--go_out=./services/$(service)/gen/go  \
# 	--go_opt=module=github.com/Mar1eena/trb_proto/services/$(service) \
# 	--go-grpc_out=./services/$(service)/gen/go \
# 	--go-grpc_opt=module=github.com/Mar1eena/trb_proto/services/$(service) \
# 	--grpc-gateway_out=./services/$(service)/gen/go \
# 	--grpc-gateway_opt=module=github.com/Mar1eena/trb_proto/services/$(service) \
# 	--include_imports --include_source_info --descriptor_set_out=./services/$(service)/gen/descriptor/proto.pb 

desc: 
	protoc -I. \
	./services/$(service)/proto/*.proto \
	--include_imports --include_source_info --descriptor_set_out=./services/$(service)/gen/descriptor/proto.pb 


gen-js:
	protoc --js_out=import_style=commonjs,binary:./gen/js --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./gen/js --proto_path=./proto ./proto/*.proto
	