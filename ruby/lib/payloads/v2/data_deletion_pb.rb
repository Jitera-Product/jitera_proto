# frozen_string_literal: true
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/data_deletion.proto

require 'google/protobuf'


descriptor_data = "\n\x16v2/data_deletion.proto\x12\tschema.v2\"C\n\x13TeamDeletionRequest\x12,\n\x0cproject_data\x18\x01 \x03(\x0b\x32\x16.schema.v2.ProjectData\">\n\x0bProjectData\x12\x12\n\nproject_id\x18\x01 \x01(\x05\x12\x1b\n\x13project_generate_id\x18\x02 \x03(\x05\x62\x06proto3"

pool = Google::Protobuf::DescriptorPool.generated_pool
pool.add_serialized_file(descriptor_data)

module Schema
  module V2
    TeamDeletionRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.TeamDeletionRequest").msgclass
    ProjectData = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.ProjectData").msgclass
  end
end
