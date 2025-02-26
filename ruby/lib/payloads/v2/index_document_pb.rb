# frozen_string_literal: true
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/index_document.proto

require 'google/protobuf'

require 'google/protobuf/struct_pb'


descriptor_data = "\n\x17v2/index_document.proto\x12\tschema.v2\x1a\x11v2/document.proto\x1a\x1cgoogle/protobuf/struct.proto\"y\n\x14IndexDocumentRequest\x12!\n\x19project_generate_queue_id\x18\x01 \x01(\x05\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12*\n\x08\x64ocument\x18\x03 \x01(\x0b\x32\x18.schema.v2.core.Document\"\xe1\x01\n\x15IndexDocumentResponse\x12!\n\x19project_generate_queue_id\x18\x01 \x01(\x05\x12\x14\n\x07message\x18\x02 \x01(\tH\x00\x88\x01\x01\x12\x37\n\x06status\x18\x04 \x01(\x0e\x32\'.schema.v2.IndexDocumentResponse.Status\x12\x15\n\rerror_message\x18\x07 \x01(\t\"3\n\x06Status\x12\r\n\tSUCCEEDED\x10\x00\x12\x0e\n\nINPROGRESS\x10\x01\x12\n\n\x06\x46\x41ILED\x10\x02\x42\n\n\x08_message\"\x87\x01\n\x1a\x44\x65leteIndexDocumentRequest\x12!\n\x19project_generate_queue_id\x18\x01 \x01(\x05\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12\x32\n\x11\x64\x65leted_documents\x18\x03 \x01(\x0b\x32\x17.google.protobuf.Struct\"\xed\x01\n\x1b\x44\x65leteIndexDocumentResponse\x12!\n\x19project_generate_queue_id\x18\x01 \x01(\x05\x12\x14\n\x07message\x18\x02 \x01(\tH\x00\x88\x01\x01\x12=\n\x06status\x18\x04 \x01(\x0e\x32-.schema.v2.DeleteIndexDocumentResponse.Status\x12\x15\n\rerror_message\x18\x07 \x01(\t\"3\n\x06Status\x12\r\n\tSUCCEEDED\x10\x00\x12\x0e\n\nINPROGRESS\x10\x01\x12\n\n\x06\x46\x41ILED\x10\x02\x42\n\n\x08_messageb\x06proto3"

pool = Google::Protobuf::DescriptorPool.generated_pool
pool.add_serialized_file(descriptor_data)

module Schema
  module V2
    IndexDocumentRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.IndexDocumentRequest").msgclass
    IndexDocumentResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.IndexDocumentResponse").msgclass
    IndexDocumentResponse::Status = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.IndexDocumentResponse.Status").enummodule
    DeleteIndexDocumentRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.DeleteIndexDocumentRequest").msgclass
    DeleteIndexDocumentResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.DeleteIndexDocumentResponse").msgclass
    DeleteIndexDocumentResponse::Status = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.DeleteIndexDocumentResponse.Status").enummodule
  end
end
