---
title: 如何快速删除 Git 仓库新增修改
lang: zh-CN
datetime: 2019-11-03
meta:
  - name: description
    content: 在使用 Git 这款版本控制工具，来管理项目代码，蛮多的时候，会涉及到“删除 Git 仓库新增修改”这样的诉求；如果能快速优雅做到，将会促进开发效率；这篇文章即在于，从不同诉求角度，来逐一探讨：“如果快速删除 Git 仓库新增修改”
  - name: keywords
    content: Git, 批量删除, 未追踪, untracked files, git checkout, git clean, git status
---

<!-- more -->

在使用 [Git](https://www.jeffjade.com/tags/Git/) 这款版本控制工具，来管理项目代码，蛮多的时候，会涉及到“删除 Git 仓库新增修改”这样的诉求；如果能快速优雅做到，将会促进开发效率；这篇文章即在于，从不同诉求角度，来逐一探讨：“如何快速删除 Git 仓库新增修改”。

![如何快速删除 Git 仓库新增修改](https://image.lovejade.cn/how-to-quickly-delete-git-repository-new-changes.jpeg)

## 只删除已追踪的文件

在 Git 项目中，可以在 `.gitignore` 文件，对一些不需要提交到代码仓库的文件（夹）加以忽视；对于这类文件，还有尚未提交到`本地暂存区`的内容，都是未追踪文件（untracked files），在处理时候，方式略有不同。如果只是删除已追踪的文件，可以有以下两种方法：

### git checkout

```bash
# 删除所有已追踪修改
git checkout  .

# 删除指定文件
git checkout -- your-modified-filename

# 删除指定文件夹内所有已追踪修改
git checkout -- your-modified-dir
```

### git reset

```bash
# 删除所有已追踪修改
git reset --hard
```

### git stash

```bash
# 删除所已追踪修改
git stash
git stash drop
```

在用这种方法时候，还需要考虑“储藏区”是否有其他内容；很明显可以看出来，使用 `git checkout` 是最为灵活且快捷的方式。

## 只删除未追踪的文件

对于新增了一个未追踪的文件，直接在控制台、编辑器，就可以手动移除；但，如果是很多个，就需要用些方法，才会更加高效。比较推荐的方法是使用 `git clean`:

```bash
# 删除 untracked files
git clean -f

# 连 untracked 的目录也一起删掉
git clean -fd

# 连 gitignore 的 untrack 文件/目录也一起删掉 （慎用）
git clean -xfd
```

可以根据自己的诉求，附带合适的参数来运行命令；一般采用 `git clean -fd` 即可。但，为数据安全烤箱，强烈建议在运行删除命令前，加上 `-n` 参数，先看看会删掉哪些文件，以防止重要文件被误删。如下面示例：

```bash
git clean -nfd
// Would remove xxx
// Would remove yyy
```

## 删除本地修改的所有文件

对于所做的修改，却还没有提交（`git add`）的内容，结合上面 👆 的总结，运行如下命令即可：

```bash
git checkout  . && git clean -fd
# Or
git checkout  . && git clean -xfd
```

如果有些内容，已经 `git add` 添加至暂存区，也要丢弃删除的话，可以如下操作：

```bash
git reset && git checkout  . && git clean -fd
# Or
git reset && git checkout  . && git clean -xfd
```

倘若说部分内容，用 `git commit` 将暂存区里的改动给提交到本地的版本库，也要丢弃删除的话，可以如下操作：

```bash
git reset --hard HEAD^ && git checkout  . && git clean -fd
# Or
git reset --hard Last-Commit-ID && git checkout  . && git clean -fd
```

以上，即对[如何快速删除 Git 仓库新增修改]()的一些总结，如有更加便捷的办法，欢迎留言相告。

@2019-11-02 于深圳.福田 Last Modify：2019-11-02

> 原文首链：[如何快速删除 Git 仓库新增修改](https://quickapp.lovejade.cn/how-to-quickly-delete-git-repository-new-changes)

<Advertisement />
