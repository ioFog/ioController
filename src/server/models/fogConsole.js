/*
 * *******************************************************************************
 *  * Copyright (c) 2018 Edgeworx, Inc.
 *  *
 *  * This program and the accompanying materials are made available under the
 *  * terms of the Eclipse Public License v. 2.0 which is available at
 *  * http://www.eclipse.org/legal/epl-2.0
 *  *
 *  * SPDX-License-Identifier: EPL-2.0
 *  *******************************************************************************
 *
 */

/**
 * @file fogConsole.js
 * @author Zishan Iqbal
 * @description This file includes a iofog_console model used by sequalize for ORM;
 */

const Sequelize = require('sequelize');
const sequelize = require('./../utils/sequelize');
const Fog = require('./fog');

const FogConsole = sequelize.define('iofog_console', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'ID'
  },
  version: {
    type: Sequelize.BIGINT,
    field: 'version'
  },
  apiBaseUrl: {
    type: Sequelize.TEXT,
    field: 'api_base_url'
  },
  elementId: {
    type: Sequelize.TEXT,
    field: 'element_id'
  },
  accessToken: {
    type: Sequelize.TEXT,
    field: 'access_token'
  }
}, {
  // don't add the timestamp attributes (updatedAt, createdAt)
  timestamps: false,
  // disable the modification of table names
  freezeTableName: true,
  // don't use camelcase for automatically added attributes but underscore style
  // so updatedAt will be updated_at
  underscored: true
});

FogConsole.belongsTo(Fog, {
  foreignKey: 'iofog_uuid'
});
module.exports =  FogConsole;