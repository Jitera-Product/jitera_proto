<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/project_source.proto

namespace GPBMetadata\V2;

class ProjectSource
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        $pool->internalAddGeneratedFile(
            '
�
v2/project_source.proto	schema.v2"�
ProjectSource

project_id (
project_source_id (5
	framework (2".schema.v2.ProjectSource.Framework-
layer (2.schema.v2.ProjectSource.Layer
source_path (	3
created (2 .schema.v2.ProjectSource.CreatedH +
erd (2.schema.v2.ProjectSource.ERDH 	
CreatedD
ERD.
tables (2.schema.v2.ProjectSource.Table
files (	S
Table

id (
name (	0
columns (2.schema.v2.ProjectSource.Column"
Column

id (
name (	"j
	Framework
FRAMEWORK_UNSPECIFIED 

NEXTJS
VITE

NUXTJS

NESTJS
ROR
LARAVEL"E
Layer
LAYER_UNSPECIFIED 
BACKEND
FRONTEND

MOBILEB
generate_type"a
ProjectSourceSync

project_id (
project_source_id (
status (	
files (	bproto3'
        , true);

        static::$is_initialized = true;
    }
}

