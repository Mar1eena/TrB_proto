# Кодогенерация gRPC
gen-go:
	protoc -I proto proto/server/*.proto --go_out=./gen/go --go_opt=paths=source_relative --go-grpc_out=./gen/go --go-grpc_opt=paths=source_relative  --grpc-gateway_out ./gen/go --grpc-gateway_opt paths=source_relative
gen-js:
	protoc --js_out=import_style=commonjs,binary:./gen/js --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./gen/js --proto_path=./proto ./proto/*.proto
tools:
	go mod tidy
