<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payloads.proto

namespace Schema\V1\Table\Column;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.Table.Column.IntegerType</code>
 */
class IntegerType extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>optional int32 default_value = 1;</code>
     */
    protected $default_value = null;
    /**
     * Generated from protobuf field <code>repeated .schema.v1.Table.Column.IntegerType.Condition conditions = 2;</code>
     */
    private $conditions;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $default_value
     *     @type array<\Schema\V1\Table\Column\IntegerType\Condition>|\Google\Protobuf\Internal\RepeatedField $conditions
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payloads::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>optional int32 default_value = 1;</code>
     * @return int
     */
    public function getDefaultValue()
    {
        return isset($this->default_value) ? $this->default_value : 0;
    }

    public function hasDefaultValue()
    {
        return isset($this->default_value);
    }

    public function clearDefaultValue()
    {
        unset($this->default_value);
    }

    /**
     * Generated from protobuf field <code>optional int32 default_value = 1;</code>
     * @param int $var
     * @return $this
     */
    public function setDefaultValue($var)
    {
        GPBUtil::checkInt32($var);
        $this->default_value = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.Table.Column.IntegerType.Condition conditions = 2;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getConditions()
    {
        return $this->conditions;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.Table.Column.IntegerType.Condition conditions = 2;</code>
     * @param array<\Schema\V1\Table\Column\IntegerType\Condition>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setConditions($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Schema\V1\Table\Column\IntegerType\Condition::class);
        $this->conditions = $arr;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(IntegerType::class, \Schema\V1\Table_Column_IntegerType::class);
