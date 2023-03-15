#include <stdio.h>
#include <stdbool.h>

bool exists(char *filename);

int main()
{
    char file_name[] = "example.txt";
    if (exists(file_name))
    {
        printf("The file %s don't exists.\n", file_name);
    }
    else
    {
        printf("The file %s exists\n", file_name);
    }
}

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


int wirteFile(char *filename) {
    FILE *file;

    file = fope(filename, "w");
    if(file == NULL) {
        printf("Error al abrir el archivo");
        return 1;
    }
    fprintf(file, "Este es un mensaje que se escribirá en el archivo.\n"); 
    fclose(file);
    return 0;
}