## ABOUT
+ Proto files
+ Interfaces of proto files for node, php, ruby
## BUILD
### NODEJS
```
cd node
yarn protobuf:generate
```
NPM package: https://www.npmjs.com/package/@jitera/proto
Know issues:
```
Struct.wrap -> StructData.wrap
Struct.unwarp -> StructData.unwarp
... (other data type)
```
### PHP
```
composer generate-payload
```
### RUBY
```
cd ruby
$ grpc_tools_ruby_protoc -I ../protos --ruby_out=./lib/payloads --grpc_out=./lib/payloads ../protos/**/*.proto --proto_path=lib/payloads
```
Know issues:
Remove below require
```
require 'v1/payloads_pb'
```
