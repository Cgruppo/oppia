// Copyright 2014 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


/**
 * Directive for the EndConversation 'interaction'.
 *
 * IMPORTANT NOTE: The naming convention for customization args that are passed
 * into the directive is: the name of the parameter, followed by 'With',
 * followed by the name of the arg.
 */
oppia.directive('oppiaInteractiveEndConversation', [
  'oppiaHtmlEscaper', function(oppiaHtmlEscaper) {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'interaction/EndConversation',
      controller: ['$scope', '$http', '$attrs', 'urlService', function($scope, $http, $attrs, urlService) {
        $scope.isIframed = urlService.isIframed();

        $scope.recommendedExplorationIds = oppiaHtmlEscaper.escapedJsonToObj(
          $attrs.recommendedExplorationIdsWithValue);

        $http({
          method: 'GET',
          url: '/explorationsummarieshandler/data',
          params: {
            stringified_exp_ids: JSON.stringify($scope.recommendedExplorationIds)
          }
        }).success(function(data) {
          $scope.recommendedExplorationSummaries = data.summaries;
        });
      }]
    };
  }
]);

oppia.directive('oppiaResponseEndConversation', [
  'oppiaHtmlEscaper', function(oppiaHtmlEscaper) {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'response/EndConversation',
      controller: ['$scope', '$attrs', function($scope, $attrs) {

      }]
    };
  }
]);
