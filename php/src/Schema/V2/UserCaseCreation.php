<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v2/user_case_creation.proto

namespace Schema\V2;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v2.UserCaseCreation</code>
 */
class UserCaseCreation extends \Google\Protobuf\Internal\Message
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
     * Generated from protobuf field <code>repeated .schema.v2.UserCase user_cases = 3;</code>
     */
    private $user_cases;
    /**
     * Generated from protobuf field <code>optional .schema.v2.UserCaseCreation.ProjectTable project_tables = 6;</code>
     */
    protected $project_tables = null;
    protected $state;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $project_generate_queue_id
     *     @type int $project_id
     *     @type array<\Schema\V2\UserCase>|\Google\Protobuf\Internal\RepeatedField $user_cases
     *     @type \Schema\V2\UserCaseCreation\Progress $progress
     *     @type \Schema\V2\UserCaseCreation\Error $error
     *     @type \Schema\V2\UserCaseCreation\ProjectTable $project_tables
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\V2\UserCaseCreation::initOnce();
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
     * Generated from protobuf field <code>repeated .schema.v2.UserCase user_cases = 3;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getUserCases()
    {
        return $this->user_cases;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v2.UserCase user_cases = 3;</code>
     * @param array<\Schema\V2\UserCase>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setUserCases($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Schema\V2\UserCase::class);
        $this->user_cases = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v2.UserCaseCreation.Progress progress = 4;</code>
     * @return \Schema\V2\UserCaseCreation\Progress|null
     */
    public function getProgress()
    {
        return $this->readOneof(4);
    }

    public function hasProgress()
    {
        return $this->hasOneof(4);
    }

    /**
     * Generated from protobuf field <code>.schema.v2.UserCaseCreation.Progress progress = 4;</code>
     * @param \Schema\V2\UserCaseCreation\Progress $var
     * @return $this
     */
    public function setProgress($var)
    {
        GPBUtil::checkMessage($var, \Schema\V2\UserCaseCreation\Progress::class);
        $this->writeOneof(4, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v2.UserCaseCreation.Error error = 5;</code>
     * @return \Schema\V2\UserCaseCreation\Error|null
     */
    public function getError()
    {
        return $this->readOneof(5);
    }

    public function hasError()
    {
        return $this->hasOneof(5);
    }

    /**
     * Generated from protobuf field <code>.schema.v2.UserCaseCreation.Error error = 5;</code>
     * @param \Schema\V2\UserCaseCreation\Error $var
     * @return $this
     */
    public function setError($var)
    {
        GPBUtil::checkMessage($var, \Schema\V2\UserCaseCreation\Error::class);
        $this->writeOneof(5, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>optional .schema.v2.UserCaseCreation.ProjectTable project_tables = 6;</code>
     * @return \Schema\V2\UserCaseCreation\ProjectTable|null
     */
    public function getProjectTables()
    {
        return $this->project_tables;
    }

    public function hasProjectTables()
    {
        return isset($this->project_tables);
    }

    public function clearProjectTables()
    {
        unset($this->project_tables);
    }

    /**
     * Generated from protobuf field <code>optional .schema.v2.UserCaseCreation.ProjectTable project_tables = 6;</code>
     * @param \Schema\V2\UserCaseCreation\ProjectTable $var
     * @return $this
     */
    public function setProjectTables($var)
    {
        GPBUtil::checkMessage($var, \Schema\V2\UserCaseCreation\ProjectTable::class);
        $this->project_tables = $var;

        return $this;
    }

    /**
     * @return string
     */
    public function getState()
    {
        return $this->whichOneof("state");
    }

}

