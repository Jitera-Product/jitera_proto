# frozen_string_literal: true
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/index_block_document.proto

require 'google/protobuf'
require 'google/protobuf/struct_pb'


descriptor_data = "\n\x1dv2/index_block_document.proto\x12\tschema.v2\x1a\x13v2/block_core.proto\x1a\x1cgoogle/protobuf/struct.proto\"y\n\x19IndexBlockDocumentRequest\x12!\n\x19project_generate_queue_id\x18\x01 \x01(\x05\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12%\n\x06\x62locks\x18\x03 \x03(\x0b\x32\x15.schema.v2.core.Block\"\xc9\x01\n\x1aIndexBlockDocumentResponse\x12!\n\x19project_generate_queue_id\x18\x01 \x01(\x05\x12<\n\x06status\x18\x04 \x01(\x0e\x32,.schema.v2.IndexBlockDocumentResponse.Status\x12\x15\n\rerror_message\x18\x07 \x01(\t\"3\n\x06Status\x12\r\n\tSUCCEEDED\x10\x00\x12\x0e\n\nINPROGRESS\x10\x01\x12\n\n\x06\x46\x41ILED\x10\x02\"\x91\x01\n\x1f\x44\x65leteIndexBlockDocumentRequest\x12!\n\x19project_generate_queue_id\x18\x01 \x01(\x05\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12\x37\n\x16\x64\x65leted_block_node_ids\x18\x03 \x01(\x0b\x32\x17.google.protobuf.Struct\"\xd5\x01\n DeleteIndexBlockDocumentResponse\x12!\n\x19project_generate_queue_id\x18\x01 \x01(\x05\x12\x42\n\x06status\x18\x04 \x01(\x0e\x32\x32.schema.v2.DeleteIndexBlockDocumentResponse.Status\x12\x15\n\rerror_message\x18\x07 \x01(\t\"3\n\x06Status\x12\r\n\tSUCCEEDED\x10\x00\x12\x0e\n\nINPROGRESS\x10\x01\x12\n\n\x06\x46\x41ILED\x10\x02\x62\x06proto3"

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
    ["schema.v2.core.Block", "v2/block_core.proto"],
    ["google.protobuf.Struct", "google/protobuf/struct.proto"],
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
    IndexBlockDocumentRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.IndexBlockDocumentRequest").msgclass
    IndexBlockDocumentResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.IndexBlockDocumentResponse").msgclass
    IndexBlockDocumentResponse::Status = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.IndexBlockDocumentResponse.Status").enummodule
    DeleteIndexBlockDocumentRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.DeleteIndexBlockDocumentRequest").msgclass
    DeleteIndexBlockDocumentResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.DeleteIndexBlockDocumentResponse").msgclass
    DeleteIndexBlockDocumentResponse::Status = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.DeleteIndexBlockDocumentResponse.Status").enummodule
  end
end
