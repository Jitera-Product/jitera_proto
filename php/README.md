### Proto for PHP

1. Get the latest payload.proto file
2. Generate to PHP classes (change the path to the root before run)
```bash
protoc --proto_path=php/src --php_out=php/src payload.proto
```
