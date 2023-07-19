<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payload.proto

namespace Schema\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.Asset</code>
 */
class Asset extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string id = 1;</code>
     */
    protected $id = '';
    /**
     * Generated from protobuf field <code>string url = 2;</code>
     */
    protected $url = '';
    /**
     * Generated from protobuf field <code>string file_name = 3;</code>
     */
    protected $file_name = '';
    /**
     * Generated from protobuf field <code>int32 file_size = 4;</code>
     */
    protected $file_size = 0;
    /**
     * Generated from protobuf field <code>string content_type = 5;</code>
     */
    protected $content_type = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $id
     *     @type string $url
     *     @type string $file_name
     *     @type int $file_size
     *     @type string $content_type
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payload::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string id = 1;</code>
     * @return string
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Generated from protobuf field <code>string id = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setId($var)
    {
        GPBUtil::checkString($var, True);
        $this->id = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string url = 2;</code>
     * @return string
     */
    public function getUrl()
    {
        return $this->url;
    }

    /**
     * Generated from protobuf field <code>string url = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setUrl($var)
    {
        GPBUtil::checkString($var, True);
        $this->url = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string file_name = 3;</code>
     * @return string
     */
    public function getFileName()
    {
        return $this->file_name;
    }

    /**
     * Generated from protobuf field <code>string file_name = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setFileName($var)
    {
        GPBUtil::checkString($var, True);
        $this->file_name = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int32 file_size = 4;</code>
     * @return int
     */
    public function getFileSize()
    {
        return $this->file_size;
    }

    /**
     * Generated from protobuf field <code>int32 file_size = 4;</code>
     * @param int $var
     * @return $this
     */
    public function setFileSize($var)
    {
        GPBUtil::checkInt32($var);
        $this->file_size = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string content_type = 5;</code>
     * @return string
     */
    public function getContentType()
    {
        return $this->content_type;
    }

    /**
     * Generated from protobuf field <code>string content_type = 5;</code>
     * @param string $var
     * @return $this
     */
    public function setContentType($var)
    {
        GPBUtil::checkString($var, True);
        $this->content_type = $var;

        return $this;
    }

}

