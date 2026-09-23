#![feature(linked_list_remove)]
#![allow(dead_code)]

// Data structures

// Queue
#[path = "./src/01_data_structures/03_queue/implementations/rs/mod.rs"]
mod queue;

// Stack
#[path = "./src/01_data_structures/04_stack/implementations/rs/mod.rs"]
mod stack;

// Hash Table
#[path = "./src/01_data_structures/05_hash_table/implementations/rs/mod.rs"]
mod hash_table;

// Binary Search Tree
#[path = "./src/01_data_structures/06_tree/01_binary_search_tree/implementations/rs/mod.rs"]
mod binary_search_tree;

// Heap
#[path = "./src/01_data_structures/06_tree/02_heap/implementations/rs/mod.rs"]
mod heap;

// Trie
#[path = "./src/01_data_structures/06_tree/03_trie/implementations/rs/mod.rs"]
mod trie;

// Adjacency List
#[path = "./src/01_data_structures/07_graph/01_adjacency_list/implementations/rs/mod.rs"]
mod adjacency_list;

// Disjoint set
#[path = "./src/01_data_structures/08_disjoint_set_union_find/implementations/rs/mod.rs"]
mod disjoint_set;

// Algorithms

// Merge Sort
#[path = "./src/02_algorithms/01_sorting/01_merge_sort/implementations/rs/mod.rs"]
mod merge_sort;
// Bubble Sort
#[path = "./src/02_algorithms/01_sorting/02_bubble_sort/implementations/rs/mod.rs"]
mod bubble_sort;
// Insertion Sort
#[path = "./src/02_algorithms/01_sorting/03_insertion_sort/implementations/rs/mod.rs"]
mod insertion_sort;
// Quick Sort
#[path = "./src/02_algorithms/01_sorting/04_quicksort/implementations/rs/mod.rs"]
mod quick_sort;
// Selection Sort
#[path = "./src/02_algorithms/01_sorting/05_selection_sort/implementations/rs/mod.rs"]
mod selection_sort;
// Heap Sort
#[path = "./src/02_algorithms/01_sorting/06_heap_sort/implementations/rs/mod.rs"]
mod heap_sort;

// Problem solving techniques
#[path = "./src/03_problem_solving_techniques/05_divide_and_conquer/rs/mod.rs"]
mod divide_and_conquer;

//// Problems
#[path = "./src/05_problems/02_anagram/implementations/rs/mod.rs"]
mod anagram;
#[path = "./src/05_problems/03_array_consecutive_missing_numbers/implementations/rs/mod.rs"]
mod array_consecutive_missing_numbers;
#[path = "./src/05_problems/04_calculate_list_max_items_difference/implementations/rs/mod.rs"]
mod calculate_list_max_items_difference;
#[path = "./src/05_problems/05_calculate_no_overlaps/implementations/rs/mod.rs"]
mod calculate_no_overlaps;
#[path = "./src/05_problems/01_fizzbuzz/implementations/rs/mod.rs"]
mod fizzbuzz;
#[path = "./src/05_problems/06_gigasecond/implementations/rs/mod.rs"]
mod gigasecond;
#[path = "./src/05_problems/07_linear_searching/implementations/rs/mod.rs"]
mod linear_searching;
#[path = "./src/05_problems/08_list_sum_largest_n_numbers/implementations/rs/mod.rs"]
mod list_sum_largest_n_numbers;
#[path = "./src/05_problems/09_mystery_algorithm/implementations/rs/mod.rs"]
mod mystery_algorithm;
#[path = "./src/05_problems/10_range_sum_bst/implementations/rs/mod.rs"]
mod range_sum_bst;
#[path = "./src/05_problems/11_reverse_words_in_a_sentence/implementations/rs/mod.rs"]
mod reverse_words_in_a_sentence;
#[path = "./src/05_problems/12_sort_string/implementations/rs/mod.rs"]
mod sort_string;
#[path = "./src/05_problems/13_string_capitalize/implementations/rs/mod.rs"]
mod string_capitalize;
#[path = "./src/05_problems/14_string_reverse/implementations/rs/mod.rs"]
mod string_reverse;
