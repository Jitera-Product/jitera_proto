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
```
yarn build
// Please check version in package.json first
npm publish
```
Know issues:
```
Struct.wrap -> StructData.wrap
Struct.unwrap -> StructData.unwrap
... (other data type)
```
### PHP
```
composer generate-payload
```
### RUBY
```
cd ruby
grpc_tools_ruby_protoc -I ../protos --ruby_out=./lib/payloads --grpc_out=./lib/payloads ../protos/**/*.proto --proto_path=lib/payloads
```
Know issues:
Remove related require
Example:
```
require 'v1/payloads_pb'
```
