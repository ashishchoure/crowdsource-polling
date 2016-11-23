{
    "values": {
        "webmap": "",
        "title": "Crowdsource Polling",
        "titleIcon": "images/banner.png",
        "displayText": "<b>Welcome to the crowdsource polling application</b><p>Use Crowdsource Polling to provide information and collect feedback on plans and issues around your community.</p><p>Search for a location or click an item in the list to get started.</p>",
        "color": "#206bdb",
        "featureLayer": {
            "id": "LandUseCasesVotesComments_8488",
            "fields": [{
                "id": "sortField",
                "fields": ["CASENAME"]
            }, {
                "id": "itemVotesField",
                "fields": ["VOTES"]
            }]
        },
        "ascendingSortOrder": true,
        "commentNameField": "NAME",
        "allowFacebook": false,
        "facebookAppId": "",
        "allowGoogle": false,
        "googleplusClientId": "",
        "allowTwitter": true,
        "socialMediaDisclaimer": "Choose how you would like to sign in to this application. The name associated with your social media account will be added to any comments you post.",
        "showDisplayTextAsSplashScreen": false
    },
    "configurationSettings": [{
        "category": "<b>App</b>",
        "fields": [{
            "label": "Select a map",
            "fieldName": "webmap",
            "type": "webmap",
            "tooltip": "Web map displayed in the application"
        }, {
            "label": "Application title",
            "fieldName": "title",
            "type": "string",
            "tooltip": "Application name (max 23 chars)"
        }, {
            "label": "URL of application logo",
            "fieldName": "titleIcon",
            "type": "string",
            "tooltip": "Icon in top left corner of application. Icon should be 48px high."
        }, {
            "label": "Color scheme",
            "fieldName": "color",
            "type": "color",
            "tooltip": "Color scheme for app"
        }, {
            "label": "Help widget text",
            "fieldName": "displayText",
            "type": "string",
            "tooltip": "Text displayed in the help window. HTML tags can be used for formatting.",
            "stringFieldOption": "richtext"
        }, {
            "label": "Display the help widget as a splash screen",
            "fieldName": "showDisplayTextAsSplashScreen",
            "type": "boolean"
        }]
    }, {
        "category": "<b>Content</b>",
        "fields": [{
            "type": "paragraph",
            "value": "Configure how the application will interact with your layers."
        }, {
            "label": "Polling feature layer",
            "fieldName": "featureLayer",
            "type": "layerAndFieldSelector",
            "tooltip": "Point, line, or polygon layer containing the features to present in the application.",
            "layerOptions": {
                "supportedTypes": ["FeatureLayer"],
                "geometryTypes": ["esriGeometryPoint", "esriGeometryLine", "esriGeometryPolyline", "esriGeometryPolygon"]
            },
            "fields": [{
                "supportedTypes": ["esriFieldTypeSmallInteger", "esriFieldTypeInteger"],
                "multipleSelection": false,
                "fieldName": "itemVotesField",
                "label": "Field storing the vote tally for each report",
                "tooltip": "Numeric field in the selected layer for tracking the votes received for each feature. Field name is case-sensitive."
            }, {
                "supportedTypes": ["esriFieldTypeSmallInteger", "esriFieldTypeInteger", "esriFieldTypeSingle",
                    "esriFieldTypeDouble", "esriFieldTypeString", "esriFieldTypeDate"],
                "multipleSelection": false,
                "fieldName": "sortField",
                "label": "Field used for sorting the list of features",
                "tooltip": "Field in the selected layer for sorting items listed in app. If omitted, items are not sorted."
            }]
        }, {
            "label": "Sort order of features using values from the field defined above.",
            "fieldName": "ascendingSortOrder",
            "type": "radio",
            "tooltip": "Sorts features in ascending or descending order using the values of the sorting field. This parameter is ignored when no sorting field is specified.",
			"items":[
			{"label": "Ascending",
			"value": true},
			{"label": "Descending",
			"value": false}]
        }]
    }, {
        "category": "<b>Access</b>",
        "fields": [{
            "type": "paragraph",
            "value":"Allow your users to sign in to this application using their social media credentials. Comments submitted by authenticated users will have the commenters name automatically stored with their feedback."
        },{
            "type": "paragraph",
            "value":"See the <a href='http://solutions.arcgis.com/local-government/help/crowdsource-polling/get-started/configure-social-media-signin/' target='_blank'>help</a> for the steps to register your app with Facebook and Google+."
        },{
            "label": "Field to store the name of authenticated commenters.",
            "fieldName": "commentNameField",
            "type": "string",
            "tooltip": "Field in a table with a geodatabase relationship to the selected feature layer for storing the name of authenticated commenters. Table must exist in map. Field name is case-sensitive."
        }, {
            "label": "Allow users to sign in using Twitter",
            "fieldName": "allowTwitter",
            "type": "boolean",
            "tooltip": "Enable to allow users to sign in using their Twitter credentials"
        }, {
	        "label": "Allow users to sign in using Facebook",
	        "tooltip": "Enable to allow users to sign in using their Facebook credentials",
	        "type": "conditional",
	        "fieldName": "allowFacebook",
			"condition": false,
			"items":[{
				"label": "Please register your app with Facebook and provide your Facebook AppId",
				"tooltip": "Facebook AppId",
				"type": "string",
				"fieldName": "facebookAppId"
	    }]
	    }, {
	        "label": "Allow users to sign in using Google+",
	        "tooltip": "Enable to allow users to sign in using their Google+ credentials",
	        "type": "conditional",
	        "fieldName": "allowGoogle",
			"condition":false,
			"items":[{
	        "label": "Please register your app with Google+ and provide your Google+ Client ID",
	        "tooltip": "Google+ ClientId",
	        "type": "string",
	        "fieldName": "googleplusClientId"
	    }]
	    }, {
            "label": "Sign in window text",
            "fieldName": "socialMediaDisclaimer",
            "type": "string",
            "placeholder": "",
            "tooltip": "Text to display in the Sign In window",
            "stringFieldOption": "richtext"
        }]
    }]
}

