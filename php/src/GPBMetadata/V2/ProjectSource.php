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
        \GPBMetadata\Google\Protobuf\Struct::initOnce();
        \GPBMetadata\V1\Payloads::initOnce();
        $pool->internalAddGeneratedFile(
            '
� 
v2/project_source.proto	schema.v2v1/payloads.proto"�
ProjectSource

id (

project_id (5
	framework (2".schema.v2.ProjectSource.Framework-
layer (2.schema.v2.ProjectSource.Layer
files (	�
Table

id (
name (	6
columns (2%.schema.v2.ProjectSource.Table.Column0
Column

id (
name (	
type (	Z
Relation

id (
column (	
table (	
related_table (	
type (	"j
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

MOBILE"X
Git
repo (	
owner (	
branch (	
token (	
jitera_branch (	"�
ProjectSourceCreation!
project_generate_queue_id (0
project_source (2.schema.v2.ProjectSource+
	import_by (2.schema.v2.ImportByH�<
action (2\'.schema.v2.ProjectSourceCreation.ActionH�
source_path (	H 
git (2.schema.v2.GitH ";
Action

INDEX_CODE 
ANALYZE_CODE
CODE_TO_ERDB
sourceB

_import_byB	
_action"�
	ERDConfig!
project_generate_queue_id (0
project_source (2.schema.v2.ProjectSource
git (2.schema.v2.Git+
	import_by (2.schema.v2.ImportByH�-
import (2.schema.v2.ERDConfig.ImportH +
local (2.schema.v2.ERDConfig.LocalH >
Local
source_path (	 
tables (2.schema.v1.Table;
Import1
tables (2!.schema.v2.ERDConfig.TableChangedd
TableChanged3
type (2%.schema.v2.ERDConfig.TableChangedType
table (2.schema.v1.Table"Y
TableChangedType 
TABLECHANGEDTYPE_UNSPECIFIED 	
ADDED
UPDATED
DELETEDB
sourceB

_import_by"�
BusinessLogicChanges!
project_generate_queue_id (.
tables (2.schema.v2.ProjectSource.Table4
	relations (2!.schema.v2.ProjectSource.Relation0
project_source (2.schema.v2.ProjectSource(

block_diff (2.schema.v2.BlockDiff
git (2.schema.v2.Git+
	import_by (2.schema.v2.ImportByH �B

_import_by"�
	BlockDiff

project_id (

id (
node_id (	/
content (2.schema.v2.BlockDiff.BlockBody*
blocks (2.schema.v2.BlockDiff.Block�
Block

id (
node_id (	7
addition (2#.schema.v2.BlockDiff.Block.AdditionH ?
modification (2\'.schema.v2.BlockDiff.Block.ModificationH 7
deletion (2#.schema.v2.BlockDiff.Block.DeletionH ;
Addition/
content (2.schema.v2.BlockDiff.BlockBodyr
Modification0
deletion (2.schema.v2.BlockDiff.BlockBody0
addition (2.schema.v2.BlockDiff.BlockBody;
Deletion/
content (2.schema.v2.BlockDiff.BlockBodyB
state�
	BlockBody
name (	

block_type (	
parent_node_id (	(
content (2.google.protobuf.Struct+

properties (2.google.protobuf.Struct
children (	"�

ApiChanges0
project_source (2.schema.v2.ProjectSource(

block_diff (2.schema.v2.BlockDiff.
tables (2.schema.v2.ProjectSource.Table4
	relations (2!.schema.v2.ProjectSource.Relation!
project_generate_queue_id (
git (2.schema.v2.Git+
	import_by (2.schema.v2.ImportByH �B

_import_by"�
ProjectSourceReport!
project_generate_queue_id (

project_id (
project_source_id (
token_usage (;
progress (2\'.schema.v2.ProjectSourceReport.ProgressH ;
complete (2\'.schema.v2.ProjectSourceReport.CompleteH 5
error (2$.schema.v2.ProjectSourceReport.ErrorH @
Progress

percentage (
message (	
payload (	
Error
message (	
Complete
files (	B
state"�
UseCaseRemoval0
project_source (2.schema.v2.ProjectSource!
project_generate_queue_id (
git (2.schema.v2.Git+
	import_by (2.schema.v2.ImportByH �8
use_case_blocks (2.schema.v2.UseCaseRemoval.Block>
business_logic_blocks (2.schema.v2.UseCaseRemoval.Block3

api_blocks (2.schema.v2.UseCaseRemoval.Block�
Block

id (
node_id (	
name (	

block_type (	
parent_node_id (	+

properties (2.google.protobuf.Struct
children (	B

_import_by*>
ImportBy

github 

notion
google_docs	
figmabproto3'
        , true);

        static::$is_initialized = true;
    }
}

