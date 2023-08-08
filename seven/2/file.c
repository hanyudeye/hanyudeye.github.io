#include <stdio.h>
#include <fcntl.h>
#include <wchar.h>

int main()
{
    char buffer[100];

    int fd = open("index.md", O_RDONLY);
    read(fd, buffer, 100);
    close(fd);
    // 中文不友好
    printf("文件index.md的内容是:\n");
    printf("%s", buffer);

    return 0;
}