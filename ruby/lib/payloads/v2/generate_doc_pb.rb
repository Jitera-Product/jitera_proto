# frozen_string_literal: true
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/generate_doc.proto

require 'google/protobuf'


descriptor_data = "\n\x15v2/generate_doc.proto\x12\tschema.v2\x1a\x13v2/block_core.proto\"\xe3\x02\n\x13GenerateDocResponse\x12!\n\x19project_generate_queue_id\x18\x01 \x01(\x05\x12\x35\n\x06module\x18\x02 \x01(\x0e\x32%.schema.v2.GenerateDocResponse.Module\x12\x35\n\x06status\x18\x03 \x01(\x0e\x32%.schema.v2.GenerateDocResponse.Status\x12%\n\x06\x62locks\x18\x04 \x03(\x0b\x32\x15.schema.v2.core.Block\x12\x15\n\rerror_message\x18\x05 \x01(\t\x12\x14\n\x0ctotal_chunks\x18\x06 \x01(\x05\x12\r\n\x05items\x18\x07 \x03(\t\"&\n\x06Module\x12\x1c\n\x18\x43ODE_TO_NATURAL_LANGUAGE\x10\x00\"0\n\x06Status\x12\x0b\n\x07STARTED\x10\x00\x12\r\n\tSUCCEEDED\x10\x01\x12\n\n\x06\x46\x41ILED\x10\x02\x62\x06proto3"

pool = Google::Protobuf::DescriptorPool.generated_pool
pool.add_serialized_file(descriptor_data)

module Schema
  module V2
    GenerateDocResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.GenerateDocResponse").msgclass
    GenerateDocResponse::Module = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.GenerateDocResponse.Module").enummodule
    GenerateDocResponse::Status = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.GenerateDocResponse.Status").enummodule
  end
end
