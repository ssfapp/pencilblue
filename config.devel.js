/**
 * This is a sample configuration meant to get users and up running on a local 
 * machine.  The configuration will not support multi-process on a single 
 * server or multi-server/elastic environments.  For more detailed information 
 * on the options provided please refer to the /include/config.js file.
 * 
 * The file can be renamed to "config.js" in the same directory as this file 
 * and it will be used as the configuration when PencilBlue is started.  If 
 * this file is used then there is no need to create a "config.json"
 */

module.exports = {
    "siteName": "Startup Satna Fe",
    "siteRoot": "http://127.0.0.1:8080",
    "sitePort": 8080,
    "logging": {
        "level": "info"
    },
    "db": {
        "type":"mongo",
        "servers": [
          "127.0.0.1:27017"
        ],
        "name": "pencil_blue",
        "writeConcern": 1,
			
        //This option instructs the child to skip the checks to ensure that the
        //indices are built.  It makes the assumption that the user doesn't care
        //or that they are already in place.  This would typically be used in a
        //large production system where load can burst.  In that particular case
        //you wouldn't want to let your instances annoy the DB to check for
        //indices because it would cause greater strain on the DB under heavy
        //load.
        skip_index_check: false,

        //The indices that will be ensured by the system.  This list is checked
        //at startup by every child process.  The override config.json file may
        //also provide this attribute.  In that case the items in that array
        //will be added to the those that already exist.  NOTE: duplicates can
        //exist.
        indices: [
            //custom objects
            {
                collection: 'custom_object',
                spec: {resource_group: ASC},
                options: { }
            }
				]
    },
    "cache": {
        "fake": true,
        "host": "localhost",
        "port": 6379
    },
    "settings": {
        "use_memory": false,
        "use_cache": false
    },
    "templates": {
        "use_memory": true,
        "use_cache": false
    },
    "plugins": {
        "caching": {
            "use_memory": false,
            "use_cache": false
        }
    },
    "registry": {
        "type": "mongo"
    },
    "session": {
        "storage": "mongo"
    },
    "media": {
        "provider": "mongo",
        "max_upload_size": 6 * 1024 * 1024
    },
    "cluster": {
        "workers": 1,
        "self_managed": true
    },

    "logging": {
        
        level: "debug",
        file: LOG_FILE,
        showErrors: true
    }
};
