#!/usr/bin/env sh
# 當發生錯誤時終止腳本運行
set -e

# 因為dist資料夾預設是被ignore的，因此在進入dist資料夾後初始化git
git init

git add -A

git commit -m 'deploy'

# 部署到 https://github.com/shihray/resume.git 分支為 gh-pages
git push -f https://github.com/shihray/resume.git master:gh-pages

# 將dist資料夾中的內容推送至遠端vue-form的gh-pages分支中，並強制無條件將舊有的內容取代成目前的內容（指令 git push -f)
cd -