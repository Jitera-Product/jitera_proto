<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payload.proto

namespace Schema\V1\Authorization\Policy;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.Authorization.Policy.RoleBinding</code>
 */
class RoleBinding extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string table = 1;</code>
     */
    protected $table = '';
    /**
     * Generated from protobuf field <code>string column = 2;</code>
     */
    protected $column = '';
    /**
     * Generated from protobuf field <code>string role = 3;</code>
     */
    protected $role = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $table
     *     @type string $column
     *     @type string $role
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payload::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string table = 1;</code>
     * @return string
     */
    public function getTable()
    {
        return $this->table;
    }

    /**
     * Generated from protobuf field <code>string table = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setTable($var)
    {
        GPBUtil::checkString($var, True);
        $this->table = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string column = 2;</code>
     * @return string
     */
    public function getColumn()
    {
        return $this->column;
    }

    /**
     * Generated from protobuf field <code>string column = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setColumn($var)
    {
        GPBUtil::checkString($var, True);
        $this->column = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string role = 3;</code>
     * @return string
     */
    public function getRole()
    {
        return $this->role;
    }

    /**
     * Generated from protobuf field <code>string role = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setRole($var)
    {
        GPBUtil::checkString($var, True);
        $this->role = $var;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(RoleBinding::class, \Schema\V1\Authorization_Policy_RoleBinding::class);

