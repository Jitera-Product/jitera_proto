# frozen_string_literal: true
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/browser.proto

require 'google/protobuf'


descriptor_data = "\n\x10v2/browser.proto\x12\tschema.v2\"\x8f\x01\n\rBrowserCookie\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t\x12\x0e\n\x06\x64omain\x18\x03 \x01(\t\x12\x0f\n\x07\x65xpires\x18\x04 \x01(\x05\x12\x0c\n\x04path\x18\x05 \x01(\t\x12\x10\n\x08httpOnly\x18\x06 \x01(\x08\x12\x0e\n\x06secure\x18\x07 \x01(\x08\x12\x10\n\x08sameSite\x18\x08 \x01(\t\"2\n\x13\x42rowserLocalStorage\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t\"U\n\rBrowserOrigin\x12\x0e\n\x06origin\x18\x01 \x01(\t\x12\x34\n\x0clocalStorage\x18\x02 \x03(\x0b\x32\x1e.schema.v2.BrowserLocalStorage\"k\n\x13\x42rowserStorageState\x12)\n\x07\x63ookies\x18\x01 \x03(\x0b\x32\x18.schema.v2.BrowserCookie\x12)\n\x07origins\x18\x02 \x03(\x0b\x32\x18.schema.v2.BrowserOriginb\x06proto3"

pool = Google::Protobuf::DescriptorPool.generated_pool

begin
  pool.add_serialized_file(descriptor_data)
rescue TypeError => e
  # Compatibility code: will be removed in the next major version.
  require 'google/protobuf/descriptor_pb'
  parsed = Google::Protobuf::FileDescriptorProto.decode(descriptor_data)
  parsed.clear_dependency
  serialized = parsed.class.encode(parsed)
  file = pool.add_serialized_file(serialized)
  warn "Warning: Protobuf detected an import path issue while loading generated file #{__FILE__}"
  imports = [
  ]
  imports.each do |type_name, expected_filename|
    import_file = pool.lookup(type_name).file_descriptor
    if import_file.name != expected_filename
      warn "- #{file.name} imports #{expected_filename}, but that import was loaded as #{import_file.name}"
    end
  end
  warn "Each proto file must use a consistent fully-qualified name."
  warn "This will become an error in the next major version."
end

module Schema
  module V2
    BrowserCookie = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.BrowserCookie").msgclass
    BrowserLocalStorage = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.BrowserLocalStorage").msgclass
    BrowserOrigin = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.BrowserOrigin").msgclass
    BrowserStorageState = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.BrowserStorageState").msgclass
  end
end
