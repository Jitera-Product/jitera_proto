<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payload.proto

namespace Schema\V1\Table\Column\IntegerType;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.Table.Column.IntegerType.Condition</code>
 */
class Condition extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.schema.v1.Table.Column.Operator operator = 1;</code>
     */
    protected $operator = 0;
    protected $operand;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $operator
     *     @type int $value
     *     @type string $column_name
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payload::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Table.Column.Operator operator = 1;</code>
     * @return int
     */
    public function getOperator()
    {
        return $this->operator;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Table.Column.Operator operator = 1;</code>
     * @param int $var
     * @return $this
     */
    public function setOperator($var)
    {
        GPBUtil::checkEnum($var, \Schema\V1\Table\Column\Operator::class);
        $this->operator = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int32 value = 2;</code>
     * @return int
     */
    public function getValue()
    {
        return $this->readOneof(2);
    }

    public function hasValue()
    {
        return $this->hasOneof(2);
    }

    /**
     * Generated from protobuf field <code>int32 value = 2;</code>
     * @param int $var
     * @return $this
     */
    public function setValue($var)
    {
        GPBUtil::checkInt32($var);
        $this->writeOneof(2, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>string column_name = 3;</code>
     * @return string
     */
    public function getColumnName()
    {
        return $this->readOneof(3);
    }

    public function hasColumnName()
    {
        return $this->hasOneof(3);
    }

    /**
     * Generated from protobuf field <code>string column_name = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setColumnName($var)
    {
        GPBUtil::checkString($var, True);
        $this->writeOneof(3, $var);

        return $this;
    }

    /**
     * @return string
     */
    public function getOperand()
    {
        return $this->whichOneof("operand");
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(Condition::class, \Schema\V1\Table_Column_IntegerType_Condition::class);

