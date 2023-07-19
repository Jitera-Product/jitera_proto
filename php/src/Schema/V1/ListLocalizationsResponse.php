<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payload.proto

namespace Schema\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.ListLocalizationsResponse</code>
 */
class ListLocalizationsResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .schema.v1.Localization localizations = 1;</code>
     */
    private $localizations;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type array<\Schema\V1\Localization>|\Google\Protobuf\Internal\RepeatedField $localizations
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payload::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.Localization localizations = 1;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getLocalizations()
    {
        return $this->localizations;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.Localization localizations = 1;</code>
     * @param array<\Schema\V1\Localization>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setLocalizations($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Schema\V1\Localization::class);
        $this->localizations = $arr;

        return $this;
    }

}

