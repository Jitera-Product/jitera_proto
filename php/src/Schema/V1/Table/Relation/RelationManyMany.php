<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payloads.proto

namespace Schema\V1\Table\Relation;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.Table.Relation.RelationManyMany</code>
 */
class RelationManyMany extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string table_name = 1;</code>
     */
    protected $table_name = '';
    /**
     * Generated from protobuf field <code>string joined_name = 2;</code>
     */
    protected $joined_name = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $table_name
     *     @type string $joined_name
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payloads::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string table_name = 1;</code>
     * @return string
     */
    public function getTableName()
    {
        return $this->table_name;
    }

    /**
     * Generated from protobuf field <code>string table_name = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setTableName($var)
    {
        GPBUtil::checkString($var, True);
        $this->table_name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string joined_name = 2;</code>
     * @return string
     */
    public function getJoinedName()
    {
        return $this->joined_name;
    }

    /**
     * Generated from protobuf field <code>string joined_name = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setJoinedName($var)
    {
        GPBUtil::checkString($var, True);
        $this->joined_name = $var;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(RelationManyMany::class, \Schema\V1\Table_Relation_RelationManyMany::class);

