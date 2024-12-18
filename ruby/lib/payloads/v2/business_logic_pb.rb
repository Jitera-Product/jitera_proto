# frozen_string_literal: true
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/business_logic.proto

require 'google/protobuf'


descriptor_data = "\n\x17v2/business_logic.proto\x12\tschema.v2\"\x81\x01\n\x15\x42usinessLogicResponse\x12!\n\x19project_generate_queue_id\x18\x01 \x01(\x05\x12\x12\n\nproject_id\x18\x02 \x01(\x05\x12\x31\n\x0f\x62usiness_logics\x18\x03 \x03(\x0b\x32\x18.schema.v2.BusinessLogic\"\xbd\x04\n\rBusinessLogic\x12\x0f\n\x07node_id\x18\x01 \x01(\t\x12\x16\n\x0eparent_node_id\x18\x02 \x01(\t\x12\x14\n\x0cpage_node_id\x18\x03 \x01(\t\x12\x12\n\nblock_type\x18\x04 \x01(\t\x12\x0c\n\x04name\x18\x05 \x01(\t\x12\x31\n\x07\x63ontent\x18\x06 \x03(\x0b\x32 .schema.v2.BusinessLogic.Content\x12\x35\n\nproperties\x18\x07 \x01(\x0b\x32!.schema.v2.BusinessLogic.Property\x12\x12\n\nproject_id\x18\x08 \x01(\x05\x12\x10\n\x08\x63hildren\x18\t \x03(\t\x1a\x36\n\x07\x43ontent\x12\x0c\n\x04type\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t\x12\x0e\n\x06styles\x18\x03 \x01(\t\x1a\x82\x02\n\x08Property\x12\x18\n\x0buse_case_id\x18\x01 \x01(\tH\x00\x88\x01\x01\x12\x15\n\x08\x63\x61tegory\x18\x02 \x01(\tH\x01\x88\x01\x01\x12\x12\n\x05level\x18\x03 \x01(\x05H\x02\x88\x01\x01\x12\x17\n\ntext_color\x18\x04 \x01(\tH\x03\x88\x01\x01\x12\x1d\n\x10\x62\x61\x63kground_color\x18\x05 \x01(\tH\x04\x88\x01\x01\x12\x1b\n\x0etext_alignment\x18\x06 \x01(\tH\x05\x88\x01\x01\x42\x0e\n\x0c_use_case_idB\x0b\n\t_categoryB\x08\n\x06_levelB\r\n\x0b_text_colorB\x13\n\x11_background_colorB\x11\n\x0f_text_alignmentb\x06proto3"

pool = Google::Protobuf::DescriptorPool.generated_pool
pool.add_serialized_file(descriptor_data)

module Schema
  module V2
    BusinessLogicResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.BusinessLogicResponse").msgclass
    BusinessLogic = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.BusinessLogic").msgclass
    BusinessLogic::Content = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.BusinessLogic.Content").msgclass
    BusinessLogic::Property = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.BusinessLogic.Property").msgclass
  end
end
