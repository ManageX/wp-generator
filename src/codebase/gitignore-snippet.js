export const gitIgnoreCode = () => {
  let code = `plugin-deploy.sh
export.sh
nbproject
node_modules
build
secret.json
log.txt

# Compiled output #
###################
/dist
/tmp
/build

# Dependencies #
###################
/node_modules
/bower_components
/vendor

# Misc #
###################
.idea
config.codekit
/.sass-cache
/connect.lock
/coverage/*
/libpeerconnection.log
npm-debug.log
testem.log

# Compiled source #
###################
*.com
*.class
*.dll
*.exe
*.o
*.so

# Packages #
############
# it's better to unpack these files and commit the raw source
# git has its own built in compression methods
*.7z
*.dmg
*.gz
*.iso
*.jar
*.rar
*.tar
*.zip

# OS generated files #
######################
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Logs and databases #
######################
*.log
*.sql
*.sqlite`;

  return code;
};
