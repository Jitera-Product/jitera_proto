<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payload.proto

namespace Schema\V1\Authorization\Policy\Rule;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.Authorization.Policy.Rule.Operand</code>
 */
class Operand extends \Google\Protobuf\Internal\Message
{
    protected $operand;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Schema\V1\Authorization\Policy\Rule\Expr $expr
     *     @type \Schema\V1\Authorization\Policy\Rule $rule
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payload::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Authorization.Policy.Rule.Expr expr = 1;</code>
     * @return \Schema\V1\Authorization\Policy\Rule\Expr|null
     */
    public function getExpr()
    {
        return $this->readOneof(1);
    }

    public function hasExpr()
    {
        return $this->hasOneof(1);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Authorization.Policy.Rule.Expr expr = 1;</code>
     * @param \Schema\V1\Authorization\Policy\Rule\Expr $var
     * @return $this
     */
    public function setExpr($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\Authorization\Policy\Rule\Expr::class);
        $this->writeOneof(1, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Authorization.Policy.Rule rule = 2;</code>
     * @return \Schema\V1\Authorization\Policy\Rule|null
     */
    public function getRule()
    {
        return $this->readOneof(2);
    }

    public function hasRule()
    {
        return $this->hasOneof(2);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Authorization.Policy.Rule rule = 2;</code>
     * @param \Schema\V1\Authorization\Policy\Rule $var
     * @return $this
     */
    public function setRule($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\Authorization\Policy\Rule::class);
        $this->writeOneof(2, $var);

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
class_alias(Operand::class, \Schema\V1\Authorization_Policy_Rule_Operand::class);

