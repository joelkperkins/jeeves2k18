"use strict";
// Copyright 2018, Google, LLC.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
/*! THIS FILE IS AUTO-GENERATED */
const googleapis_common_1 = require("googleapis-common");
const v2_8_1 = require("./v2.8");
const v3_0_1 = require("./v3.0");
const v3_1_1 = require("./v3.1");
const v3_2_1 = require("./v3.2");
exports.VERSIONS = {
    'v2.8': v2_8_1.dfareporting_v2_8.Dfareporting,
    'v3.0': v3_0_1.dfareporting_v3_0.Dfareporting,
    'v3.1': v3_1_1.dfareporting_v3_1.Dfareporting,
    'v3.2': v3_2_1.dfareporting_v3_2.Dfareporting,
};
function dfareporting(versionOrOptions) {
    return googleapis_common_1.getAPI('dfareporting', versionOrOptions, exports.VERSIONS, this);
}
exports.dfareporting = dfareporting;
//# sourceMappingURL=index.js.map