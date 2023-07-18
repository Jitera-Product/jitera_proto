<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payload.proto

namespace Schema\V1\Table\Constraint;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.Table.Constraint.ForeignKey</code>
 */
class ForeignKey extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string table_name = 1;</code>
     */
    protected $table_name = '';
    /**
     * Generated from protobuf field <code>string primary_key = 2;</code>
     */
    protected $primary_key = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $table_name
     *     @type string $primary_key
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payload::initOnce();
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
     * Generated from protobuf field <code>string primary_key = 2;</code>
     * @return string
     */
    public function getPrimaryKey()
    {
        return $this->primary_key;
    }

    /**
     * Generated from protobuf field <code>string primary_key = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setPrimaryKey($var)
    {
        GPBUtil::checkString($var, True);
        $this->primary_key = $var;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(ForeignKey::class, \Schema\V1\Table_Constraint_ForeignKey::class);

