<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/block.proto

namespace Schema\V2;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v2.BusinessLogicSync</code>
 */
class BusinessLogicSync extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>int32 project_generate_queue_id = 1;</code>
     */
    protected $project_generate_queue_id = 0;
    /**
     * Generated from protobuf field <code>int32 project_id = 2;</code>
     */
    protected $project_id = 0;
    /**
     * Generated from protobuf field <code>.schema.v2.Block use_case = 3;</code>
     */
    protected $use_case = null;
    /**
     * Generated from protobuf field <code>repeated .schema.v2.Block business_logics = 4;</code>
     */
    private $business_logics;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $project_generate_queue_id
     *     @type int $project_id
     *     @type \Schema\V2\Block $use_case
     *     @type array<\Schema\V2\Block>|\Google\Protobuf\Internal\RepeatedField $business_logics
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\V2\Block::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>int32 project_generate_queue_id = 1;</code>
     * @return int
     */
    public function getProjectGenerateQueueId()
    {
        return $this->project_generate_queue_id;
    }

    /**
     * Generated from protobuf field <code>int32 project_generate_queue_id = 1;</code>
     * @param int $var
     * @return $this
     */
    public function setProjectGenerateQueueId($var)
    {
        GPBUtil::checkInt32($var);
        $this->project_generate_queue_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int32 project_id = 2;</code>
     * @return int
     */
    public function getProjectId()
    {
        return $this->project_id;
    }

    /**
     * Generated from protobuf field <code>int32 project_id = 2;</code>
     * @param int $var
     * @return $this
     */
    public function setProjectId($var)
    {
        GPBUtil::checkInt32($var);
        $this->project_id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v2.Block use_case = 3;</code>
     * @return \Schema\V2\Block|null
     */
    public function getUseCase()
    {
        return $this->use_case;
    }

    public function hasUseCase()
    {
        return isset($this->use_case);
    }

    public function clearUseCase()
    {
        unset($this->use_case);
    }

    /**
     * Generated from protobuf field <code>.schema.v2.Block use_case = 3;</code>
     * @param \Schema\V2\Block $var
     * @return $this
     */
    public function setUseCase($var)
    {
        GPBUtil::checkMessage($var, \Schema\V2\Block::class);
        $this->use_case = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v2.Block business_logics = 4;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getBusinessLogics()
    {
        return $this->business_logics;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v2.Block business_logics = 4;</code>
     * @param array<\Schema\V2\Block>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setBusinessLogics($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Schema\V2\Block::class);
        $this->business_logics = $arr;

        return $this;
    }

}

