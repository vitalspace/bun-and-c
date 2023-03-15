#include <stdio.h>
#include <stdbool.h>

int lg(const char *message)
{
    printf("%s\n", message);
    return 0;
}

// Fs

bool exists(char *filename)
{
    char *file_name = filename;

    FILE *file = fopen(file_name, "r");

    if (file != NULL)
    {
        fclose(file);
        return true;
    }
    return false;
}

int writeFile(char *filename, char *content)
{
    FILE *file;
    file = fopen(filename, "w");

    if (file == NULL)
    {
        return 1;
    }

    if (content != NULL && content[0] != '\0')
    {
        fprintf(file, "%s", content);
    }

    fclose(file);

    return 0;
}
