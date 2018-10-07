.Book {
}
.Book > section {
    display: none;
    white-space: pre-line;
}
.Book > section:target {
    display: block;
}
.Book > .intro {
    display: block;
}
.Book > section:target ~ .intro {
    display: none;
}
