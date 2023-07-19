<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: payload.proto

namespace Schema\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>schema.v1.WebApp</code>
 */
class WebApp extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .schema.v1.AppPage app_pages = 1;</code>
     */
    private $app_pages;
    /**
     * Generated from protobuf field <code>repeated .schema.v1.Asset assets = 2;</code>
     */
    private $assets;
    /**
     * Generated from protobuf field <code>repeated .schema.v1.WebApp.Variable variables = 3;</code>
     */
    private $variables;
    /**
     * Generated from protobuf field <code>repeated .schema.v1.AppPageCategory categories = 4;</code>
     */
    private $categories;
    /**
     * Generated from protobuf field <code>repeated .schema.v1.Localization localizations = 5;</code>
     */
    private $localizations;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type array<\Schema\V1\AppPage>|\Google\Protobuf\Internal\RepeatedField $app_pages
     *     @type array<\Schema\V1\Asset>|\Google\Protobuf\Internal\RepeatedField $assets
     *     @type array<\Schema\V1\WebApp\Variable>|\Google\Protobuf\Internal\RepeatedField $variables
     *     @type array<\Schema\V1\AppPageCategory>|\Google\Protobuf\Internal\RepeatedField $categories
     *     @type array<\Schema\V1\Localization>|\Google\Protobuf\Internal\RepeatedField $localizations
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Payload::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.AppPage app_pages = 1;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getAppPages()
    {
        return $this->app_pages;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.AppPage app_pages = 1;</code>
     * @param array<\Schema\V1\AppPage>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setAppPages($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Schema\V1\AppPage::class);
        $this->app_pages = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.Asset assets = 2;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getAssets()
    {
        return $this->assets;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.Asset assets = 2;</code>
     * @param array<\Schema\V1\Asset>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setAssets($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Schema\V1\Asset::class);
        $this->assets = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.WebApp.Variable variables = 3;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getVariables()
    {
        return $this->variables;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.WebApp.Variable variables = 3;</code>
     * @param array<\Schema\V1\WebApp\Variable>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setVariables($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Schema\V1\WebApp\Variable::class);
        $this->variables = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.AppPageCategory categories = 4;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getCategories()
    {
        return $this->categories;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.AppPageCategory categories = 4;</code>
     * @param array<\Schema\V1\AppPageCategory>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setCategories($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Schema\V1\AppPageCategory::class);
        $this->categories = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.Localization localizations = 5;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getLocalizations()
    {
        return $this->localizations;
    }

    /**
     * Generated from protobuf field <code>repeated .schema.v1.Localization localizations = 5;</code>
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

