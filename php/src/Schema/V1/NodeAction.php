<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payload.proto

namespace Schema\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.NodeAction</code>
 */
class NodeAction extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string action = 1;</code>
     */
    protected $action = '';
    /**
     * Generated from protobuf field <code>string value = 2;</code>
     */
    protected $value = '';
    /**
     * Generated from protobuf field <code>.schema.v1.NodeAction.ActionType action_type = 3;</code>
     */
    protected $action_type = 0;
    /**
     * Generated from protobuf field <code>.schema.v1.NodeAction.ActionSource source = 4;</code>
     */
    protected $source = 0;
    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodePayload payload = 5;</code>
     */
    private $payload;
    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodePayload response = 6;</code>
     */
    private $response;
    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeReference values = 7;</code>
     */
    private $values;
    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeAction success_actions = 8;</code>
     */
    private $success_actions;
    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeAction error_actions = 9;</code>
     */
    private $error_actions;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $action
     *     @type string $value
     *     @type int $action_type
     *     @type int $source
     *     @type array<\Schema\V1\NodePayload>|\Google\Protobuf\Internal\RepeatedField $payload
     *     @type array<\Schema\V1\NodePayload>|\Google\Protobuf\Internal\RepeatedField $response
     *     @type array<\Schema\V1\NodeReference>|\Google\Protobuf\Internal\RepeatedField $values
     *     @type array<\Schema\V1\NodeAction>|\Google\Protobuf\Internal\RepeatedField $success_actions
     *     @type array<\Schema\V1\NodeAction>|\Google\Protobuf\Internal\RepeatedField $error_actions
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payload::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string action = 1;</code>
     * @return string
     */
    public function getAction()
    {
        return $this->action;
    }

    /**
     * Generated from protobuf field <code>string action = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setAction($var)
    {
        GPBUtil::checkString($var, True);
        $this->action = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string value = 2;</code>
     * @return string
     */
    public function getValue()
    {
        return $this->value;
    }

    /**
     * Generated from protobuf field <code>string value = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setValue($var)
    {
        GPBUtil::checkString($var, True);
        $this->value = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.NodeAction.ActionType action_type = 3;</code>
     * @return int
     */
    public function getActionType()
    {
        return $this->action_type;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.NodeAction.ActionType action_type = 3;</code>
     * @param int $var
     * @return $this
     */
    public function setActionType($var)
    {
        GPBUtil::checkEnum($var, \Schema\V1\NodeAction\ActionType::class);
        $this->action_type = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.NodeAction.ActionSource source = 4;</code>
     * @return int
     */
    public function getSource()
    {
        return $this->source;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.NodeAction.ActionSource source = 4;</code>
     * @param int $var
     * @return $this
     */
    public function setSource($var)
    {
        GPBUtil::checkEnum($var, \Schema\V1\NodeAction\ActionSource::class);
        $this->source = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodePayload payload = 5;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getPayload()
    {
        return $this->payload;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodePayload payload = 5;</code>
     * @param array<\Schema\V1\NodePayload>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setPayload($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Schema\V1\NodePayload::class);
        $this->payload = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodePayload response = 6;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getResponse()
    {
        return $this->response;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodePayload response = 6;</code>
     * @param array<\Schema\V1\NodePayload>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setResponse($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Schema\V1\NodePayload::class);
        $this->response = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeReference values = 7;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getValues()
    {
        return $this->values;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeReference values = 7;</code>
     * @param array<\Schema\V1\NodeReference>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setValues($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Schema\V1\NodeReference::class);
        $this->values = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeAction success_actions = 8;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getSuccessActions()
    {
        return $this->success_actions;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeAction success_actions = 8;</code>
     * @param array<\Schema\V1\NodeAction>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setSuccessActions($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Schema\V1\NodeAction::class);
        $this->success_actions = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeAction error_actions = 9;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getErrorActions()
    {
        return $this->error_actions;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.NodeAction error_actions = 9;</code>
     * @param array<\Schema\V1\NodeAction>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setErrorActions($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Schema\V1\NodeAction::class);
        $this->error_actions = $arr;

        return $this;
    }

}

