# frozen_string_literal: true
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/translation_blocks.proto

require 'google/protobuf'


descriptor_data = "\n\x1bv2/translation_blocks.proto\x12\tschema.v2\"\xfb\x01\n\x11TranslationBlocks\x12!\n\x19project_generate_queue_id\x18\x01 \x01(\x05\x12\x44\n\x0flanguage_config\x18\x02 \x01(\x0b\x32+.schema.v2.TranslationBlocks.LanguageConfig\x12+\n\x06\x62locks\x18\x03 \x03(\x0b\x32\x1b.schema.v2.TranslationBlock\x12\x12\n\nproject_id\x18\x04 \x01(\x05\x1a<\n\x0eLanguageConfig\x12\x15\n\rfrom_language\x18\x01 \x01(\t\x12\x13\n\x0bto_language\x18\x02 \x01(\t\"=\n\x10TranslationBlock\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x0f\n\x07\x63ontent\x18\x03 \x03(\t\"\x9c\x02\n\x19TranslationBlocksResponse\x12!\n\x19project_generate_queue_id\x18\x01 \x01(\x05\x12\x13\n\x0btoken_usage\x18\x02 \x01(\x05\x12+\n\x06\x62locks\x18\x03 \x03(\x0b\x32\x1b.schema.v2.TranslationBlock\x12\x0e\n\x06\x65rrors\x18\x04 \x03(\t\x12L\n\x0flanguage_config\x18\x05 \x01(\x0b\x32\x33.schema.v2.TranslationBlocksResponse.LanguageConfig\x1a<\n\x0eLanguageConfig\x12\x15\n\rfrom_language\x18\x01 \x01(\t\x12\x13\n\x0bto_language\x18\x02 \x01(\tb\x06proto3"

pool = Google::Protobuf::DescriptorPool.generated_pool
pool.add_serialized_file(descriptor_data)

module Schema
  module V2
    TranslationBlocks = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.TranslationBlocks").msgclass
    TranslationBlocks::LanguageConfig = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.TranslationBlocks.LanguageConfig").msgclass
    TranslationBlock = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.TranslationBlock").msgclass
    TranslationBlocksResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.TranslationBlocksResponse").msgclass
    TranslationBlocksResponse::LanguageConfig = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("schema.v2.TranslationBlocksResponse.LanguageConfig").msgclass
  end
end
