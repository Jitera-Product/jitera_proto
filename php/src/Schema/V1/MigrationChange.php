<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payloads.proto

namespace Schema\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.MigrationChange</code>
 */
class MigrationChange extends \Google\Protobuf\Internal\Message
{
    protected $methods;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Schema\V1\CreateTable $create_table
     *     @type \Schema\V1\ChangeTableName $change_table_name
     *     @type \Schema\V1\ChangeTableComment $change_table_comment
     *     @type \Schema\V1\AddColumn $add_column
     *     @type \Schema\V1\RenameColumn $rename_column
     *     @type \Schema\V1\ChangeColumnComment $change_column_comment
     *     @type \Schema\V1\ChangeColumn $change_column
     *     @type \Schema\V1\ChangeColumnDefault $change_column_default
     *     @type \Schema\V1\ChangeColumnNull $change_column_null
     *     @type \Schema\V1\RemoveTableIndex $remove_table_index
     *     @type \Schema\V1\RemoveTableRelation $remove_table_relation
     *     @type \Schema\V1\CreateTableRelation $create_table_relation
     *     @type \Schema\V1\RemoveColumn $remove_column
     *     @type \Schema\V1\DropTable $drop_table
     *     @type \Schema\V1\ChangeTableIndex $change_table_index
     *     @type \Schema\V1\CreateTableIndex $create_table_index
     *     @type \Schema\V1\AddUniqColumn $add_uniq_column
     *     @type \Schema\V1\ChangeColumnUnique $change_column_unique
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payloads::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.CreateTable create_table = 1;</code>
     * @return \Schema\V1\CreateTable|null
     */
    public function getCreateTable()
    {
        return $this->readOneof(1);
    }

    public function hasCreateTable()
    {
        return $this->hasOneof(1);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.CreateTable create_table = 1;</code>
     * @param \Schema\V1\CreateTable $var
     * @return $this
     */
    public function setCreateTable($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\CreateTable::class);
        $this->writeOneof(1, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.ChangeTableName change_table_name = 2;</code>
     * @return \Schema\V1\ChangeTableName|null
     */
    public function getChangeTableName()
    {
        return $this->readOneof(2);
    }

    public function hasChangeTableName()
    {
        return $this->hasOneof(2);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.ChangeTableName change_table_name = 2;</code>
     * @param \Schema\V1\ChangeTableName $var
     * @return $this
     */
    public function setChangeTableName($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\ChangeTableName::class);
        $this->writeOneof(2, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.ChangeTableComment change_table_comment = 3;</code>
     * @return \Schema\V1\ChangeTableComment|null
     */
    public function getChangeTableComment()
    {
        return $this->readOneof(3);
    }

    public function hasChangeTableComment()
    {
        return $this->hasOneof(3);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.ChangeTableComment change_table_comment = 3;</code>
     * @param \Schema\V1\ChangeTableComment $var
     * @return $this
     */
    public function setChangeTableComment($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\ChangeTableComment::class);
        $this->writeOneof(3, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.AddColumn add_column = 4;</code>
     * @return \Schema\V1\AddColumn|null
     */
    public function getAddColumn()
    {
        return $this->readOneof(4);
    }

    public function hasAddColumn()
    {
        return $this->hasOneof(4);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.AddColumn add_column = 4;</code>
     * @param \Schema\V1\AddColumn $var
     * @return $this
     */
    public function setAddColumn($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\AddColumn::class);
        $this->writeOneof(4, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.RenameColumn rename_column = 5;</code>
     * @return \Schema\V1\RenameColumn|null
     */
    public function getRenameColumn()
    {
        return $this->readOneof(5);
    }

    public function hasRenameColumn()
    {
        return $this->hasOneof(5);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.RenameColumn rename_column = 5;</code>
     * @param \Schema\V1\RenameColumn $var
     * @return $this
     */
    public function setRenameColumn($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\RenameColumn::class);
        $this->writeOneof(5, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.ChangeColumnComment change_column_comment = 6;</code>
     * @return \Schema\V1\ChangeColumnComment|null
     */
    public function getChangeColumnComment()
    {
        return $this->readOneof(6);
    }

    public function hasChangeColumnComment()
    {
        return $this->hasOneof(6);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.ChangeColumnComment change_column_comment = 6;</code>
     * @param \Schema\V1\ChangeColumnComment $var
     * @return $this
     */
    public function setChangeColumnComment($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\ChangeColumnComment::class);
        $this->writeOneof(6, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.ChangeColumn change_column = 7;</code>
     * @return \Schema\V1\ChangeColumn|null
     */
    public function getChangeColumn()
    {
        return $this->readOneof(7);
    }

    public function hasChangeColumn()
    {
        return $this->hasOneof(7);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.ChangeColumn change_column = 7;</code>
     * @param \Schema\V1\ChangeColumn $var
     * @return $this
     */
    public function setChangeColumn($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\ChangeColumn::class);
        $this->writeOneof(7, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.ChangeColumnDefault change_column_default = 8;</code>
     * @return \Schema\V1\ChangeColumnDefault|null
     */
    public function getChangeColumnDefault()
    {
        return $this->readOneof(8);
    }

    public function hasChangeColumnDefault()
    {
        return $this->hasOneof(8);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.ChangeColumnDefault change_column_default = 8;</code>
     * @param \Schema\V1\ChangeColumnDefault $var
     * @return $this
     */
    public function setChangeColumnDefault($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\ChangeColumnDefault::class);
        $this->writeOneof(8, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.ChangeColumnNull change_column_null = 9;</code>
     * @return \Schema\V1\ChangeColumnNull|null
     */
    public function getChangeColumnNull()
    {
        return $this->readOneof(9);
    }

    public function hasChangeColumnNull()
    {
        return $this->hasOneof(9);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.ChangeColumnNull change_column_null = 9;</code>
     * @param \Schema\V1\ChangeColumnNull $var
     * @return $this
     */
    public function setChangeColumnNull($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\ChangeColumnNull::class);
        $this->writeOneof(9, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.RemoveTableIndex remove_table_index = 10;</code>
     * @return \Schema\V1\RemoveTableIndex|null
     */
    public function getRemoveTableIndex()
    {
        return $this->readOneof(10);
    }

    public function hasRemoveTableIndex()
    {
        return $this->hasOneof(10);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.RemoveTableIndex remove_table_index = 10;</code>
     * @param \Schema\V1\RemoveTableIndex $var
     * @return $this
     */
    public function setRemoveTableIndex($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\RemoveTableIndex::class);
        $this->writeOneof(10, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.RemoveTableRelation remove_table_relation = 11;</code>
     * @return \Schema\V1\RemoveTableRelation|null
     */
    public function getRemoveTableRelation()
    {
        return $this->readOneof(11);
    }

    public function hasRemoveTableRelation()
    {
        return $this->hasOneof(11);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.RemoveTableRelation remove_table_relation = 11;</code>
     * @param \Schema\V1\RemoveTableRelation $var
     * @return $this
     */
    public function setRemoveTableRelation($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\RemoveTableRelation::class);
        $this->writeOneof(11, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.CreateTableRelation create_table_relation = 12;</code>
     * @return \Schema\V1\CreateTableRelation|null
     */
    public function getCreateTableRelation()
    {
        return $this->readOneof(12);
    }

    public function hasCreateTableRelation()
    {
        return $this->hasOneof(12);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.CreateTableRelation create_table_relation = 12;</code>
     * @param \Schema\V1\CreateTableRelation $var
     * @return $this
     */
    public function setCreateTableRelation($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\CreateTableRelation::class);
        $this->writeOneof(12, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.RemoveColumn remove_column = 13;</code>
     * @return \Schema\V1\RemoveColumn|null
     */
    public function getRemoveColumn()
    {
        return $this->readOneof(13);
    }

    public function hasRemoveColumn()
    {
        return $this->hasOneof(13);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.RemoveColumn remove_column = 13;</code>
     * @param \Schema\V1\RemoveColumn $var
     * @return $this
     */
    public function setRemoveColumn($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\RemoveColumn::class);
        $this->writeOneof(13, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.DropTable drop_table = 14;</code>
     * @return \Schema\V1\DropTable|null
     */
    public function getDropTable()
    {
        return $this->readOneof(14);
    }

    public function hasDropTable()
    {
        return $this->hasOneof(14);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.DropTable drop_table = 14;</code>
     * @param \Schema\V1\DropTable $var
     * @return $this
     */
    public function setDropTable($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\DropTable::class);
        $this->writeOneof(14, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.ChangeTableIndex change_table_index = 15;</code>
     * @return \Schema\V1\ChangeTableIndex|null
     */
    public function getChangeTableIndex()
    {
        return $this->readOneof(15);
    }

    public function hasChangeTableIndex()
    {
        return $this->hasOneof(15);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.ChangeTableIndex change_table_index = 15;</code>
     * @param \Schema\V1\ChangeTableIndex $var
     * @return $this
     */
    public function setChangeTableIndex($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\ChangeTableIndex::class);
        $this->writeOneof(15, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.CreateTableIndex create_table_index = 16;</code>
     * @return \Schema\V1\CreateTableIndex|null
     */
    public function getCreateTableIndex()
    {
        return $this->readOneof(16);
    }

    public function hasCreateTableIndex()
    {
        return $this->hasOneof(16);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.CreateTableIndex create_table_index = 16;</code>
     * @param \Schema\V1\CreateTableIndex $var
     * @return $this
     */
    public function setCreateTableIndex($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\CreateTableIndex::class);
        $this->writeOneof(16, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.AddUniqColumn add_uniq_column = 17;</code>
     * @return \Schema\V1\AddUniqColumn|null
     */
    public function getAddUniqColumn()
    {
        return $this->readOneof(17);
    }

    public function hasAddUniqColumn()
    {
        return $this->hasOneof(17);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.AddUniqColumn add_uniq_column = 17;</code>
     * @param \Schema\V1\AddUniqColumn $var
     * @return $this
     */
    public function setAddUniqColumn($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\AddUniqColumn::class);
        $this->writeOneof(17, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.ChangeColumnUnique change_column_unique = 18;</code>
     * @return \Schema\V1\ChangeColumnUnique|null
     */
    public function getChangeColumnUnique()
    {
        return $this->readOneof(18);
    }

    public function hasChangeColumnUnique()
    {
        return $this->hasOneof(18);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.ChangeColumnUnique change_column_unique = 18;</code>
     * @param \Schema\V1\ChangeColumnUnique $var
     * @return $this
     */
    public function setChangeColumnUnique($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\ChangeColumnUnique::class);
        $this->writeOneof(18, $var);

        return $this;
    }

    /**
     * @return string
     */
    public function getMethods()
    {
        return $this->whichOneof("methods");
    }

}

