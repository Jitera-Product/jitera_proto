# frozen_string_literal: true
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/business_logic_group.proto

require 'google/protobuf'


descriptor_data = "\n\x1dv2/business_logic_group.proto\x12\tschema.v2\"\xb3\x02\n\x1e\x42usinessLogicGroupSyncResponse\x12!\n\x19project_generate_queue_id\x18\x01 \x01(\x05\x12\x0f\n\x07message\x18\x02 \x01(\t\x12@\n\x06status\x18\x03 \x01(\x0e\x32\x30.schema.v2.BusinessLogicGroupSyncResponse.Status\x12\x13\n\x0btoken_usage\x18\x04 \x01(\x05\x12<\n\x15\x62usiness_logic_groups\x18\x05 \x03(\x0b\x32\x1d.schema.v2.BusinessLogicGroup\"H\n\x06Status\x12\x16\n\x12STATUS_UNSPECIFIED\x10\x00\x12\x0b\n\x07STARTED\x10\x01\x12\r\n\tSUCCEEDED\x10\x02\x12\n\n\x06\x46\x41ILED\x10\x03\"8\n\x12\x42usinessLogicGroup\x12\x10\n\x08\x63\x61tegory\x18\x01 \x01(\t\x12\x10\n\x08node_ids\x18\x02 \x03(\t\"\x87\x01\n\x16\x42usinessLogicGroupSync\x12!\n\x19project_generate_queue_id\x18\x01 \x01(\x05\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12\x36\n\x0f\x62usiness_logics\x18\x03 \x03(\x0b\x32\x1d.schema.v2.BusinessLogicNames\"3\n\x12\x42usinessLogicNames\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x0f\n\x07node_id\x18\x02 \x01(\tb\x06proto3"

pool = Google::Protobuf::DescriptorPool.generated_pool
pool.add_serialized_file(descriptor_data)

module Schema
  module V2
    BusinessLogicGroupSyncResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.BusinessLogicGroupSyncResponse").msgclass
    BusinessLogicGroupSyncResponse::Status = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.BusinessLogicGroupSyncResponse.Status").enummodule
    BusinessLogicGroup = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.BusinessLogicGroup").msgclass
    BusinessLogicGroupSync = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.BusinessLogicGroupSync").msgclass
    BusinessLogicNames = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.BusinessLogicNames").msgclass
  end
end