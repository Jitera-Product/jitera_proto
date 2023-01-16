# Proto

## Installation

Install the gem and add to the application's Gemfile by executing:

    $ bundle add jitera_proto

If bundler is not being used to manage dependencies, install the gem by executing:

    $ gem install jitera_proto

## Usage

### Generate protobuf

```
$ grpc_tools_ruby_protoc -I ./lib/payloads --ruby_out=./lib/payloads --grpc_out=./lib/payloads ./lib/payloads/**/*.proto --proto_path=lib/payloads
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/proto.
