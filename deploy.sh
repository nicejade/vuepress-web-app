#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn run build

# 进入生成的文件夹
cd ./docs/dist

# 如果是发布到自定义域名
echo 'nice.lovejade.cn' > CNAME

git init
git add -A
git commit -m 'deploy update 🎉'

# 添加远程仓库
git remote add origin git@github.com:nicejade/vuepress-web-app.git

# 创建并切换到 master 分支
git checkout -b master

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:nicejade/vuepress-web-app.git master:gh-pages
cd -
