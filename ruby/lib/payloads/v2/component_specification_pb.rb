# frozen_string_literal: true
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/component_specification.proto

require 'google/protobuf'


descriptor_data = "\n v2/component_specification.proto\x12\tschema.v2\"\x82\x03\n\x16\x43omponentSpecification\x12\x0c\n\x04type\x18\x01 \x01(\t\x12\r\n\x05title\x18\x02 \x01(\t\x12\x13\n\x0b\x64\x65scription\x18\x03 \x01(\t\x12\x13\n\x0b\x66igmaNodeId\x18\x04 \x01(\t\x12\x42\n\x0b\x62oundingBox\x18\x05 \x01(\x0b\x32-.schema.v2.ComponentSpecification.BoundingBox\x12\x39\n\x07\x61\x63tions\x18\x06 \x03(\x0b\x32(.schema.v2.ComponentSpecification.Action\x1aG\n\x0b\x42oundingBox\x12\x0b\n\x03top\x18\x01 \x01(\x02\x12\x0c\n\x04left\x18\x02 \x01(\x02\x12\r\n\x05right\x18\x03 \x01(\x02\x12\x0e\n\x06\x62ottom\x18\x04 \x01(\x02\x1aY\n\x06\x41\x63tion\x12\x0c\n\x04type\x18\x01 \x01(\t\x12\x13\n\x0b\x64\x65scription\x18\x02 \x01(\t\x12\x16\n\x0ereference_type\x18\x03 \x01(\t\x12\x14\n\x0creference_id\x18\x04 \x01(\tb\x06proto3"

pool = Google::Protobuf::DescriptorPool.generated_pool
pool.add_serialized_file(descriptor_data)

module Schema
  module V2
    ComponentSpecification = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ComponentSpecification").msgclass
    ComponentSpecification::BoundingBox = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ComponentSpecification.BoundingBox").msgclass
    ComponentSpecification::Action = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ComponentSpecification.Action").msgclass
  end
end
