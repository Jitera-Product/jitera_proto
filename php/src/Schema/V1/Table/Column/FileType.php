<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: v1/payloads.proto

namespace Schema\V1\Table\Column;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.Table.Column.FileType</code>
 */
class FileType extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>int32 maximum_size = 1;</code>
     */
    protected $maximum_size = 0;
    /**
     * Generated from protobuf field <code>.schema.v1.Table.Column.FileType.NumberOfFiles number_of_files = 2;</code>
     */
    protected $number_of_files = null;
    /**
     * Generated from protobuf field <code>repeated .schema.v1.Table.Column.FileType.ContentType content_types = 3;</code>
     */
    private $content_types;
    /**
     * Generated from protobuf field <code>bool multiple = 4;</code>
     */
    protected $multiple = false;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $maximum_size
     *     @type \Schema\V1\Table\Column\FileType\NumberOfFiles $number_of_files
     *     @type array<int>|\Google\Protobuf\Internal\RepeatedField $content_types
     *     @type bool $multiple
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\V1\Payloads::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>int32 maximum_size = 1;</code>
     * @return int
     */
    public function getMaximumSize()
    {
        return $this->maximum_size;
    }

    /**
     * Generated from protobuf field <code>int32 maximum_size = 1;</code>
     * @param int $var
     * @return $this
     */
    public function setMaximumSize($var)
    {
        GPBUtil::checkInt32($var);
        $this->maximum_size = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Table.Column.FileType.NumberOfFiles number_of_files = 2;</code>
     * @return \Schema\V1\Table\Column\FileType\NumberOfFiles|null
     */
    public function getNumberOfFiles()
    {
        return $this->number_of_files;
    }

    public function hasNumberOfFiles()
    {
        return isset($this->number_of_files);
    }

    public function clearNumberOfFiles()
    {
        unset($this->number_of_files);
    }

    /**
     * Generated from protobuf field <code>.schema.v1.Table.Column.FileType.NumberOfFiles number_of_files = 2;</code>
     * @param \Schema\V1\Table\Column\FileType\NumberOfFiles $var
     * @return $this
     */
    public function setNumberOfFiles($var)
    {
        GPBUtil::checkMessage($var, \Schema\V1\Table\Column\FileType\NumberOfFiles::class);
        $this->number_of_files = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.Table.Column.FileType.ContentType content_types = 3;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getContentTypes()
    {
        return $this->content_types;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.Table.Column.FileType.ContentType content_types = 3;</code>
     * @param array<int>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setContentTypes($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::ENUM, \Schema\V1\Table\Column\FileType\ContentType::class);
        $this->content_types = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool multiple = 4;</code>
     * @return bool
     */
    public function getMultiple()
    {
        return $this->multiple;
    }

    /**
     * Generated from protobuf field <code>bool multiple = 4;</code>
     * @param bool $var
     * @return $this
     */
    public function setMultiple($var)
    {
        GPBUtil::checkBool($var);
        $this->multiple = $var;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(FileType::class, \Schema\V1\Table_Column_FileType::class);

