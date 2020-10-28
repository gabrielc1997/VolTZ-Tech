<?php
// imagem destacada
add_theme_support('post-thumbnails');

// ativando menu dinamico
function register_my_menus()
{
    register_nav_menus(
        array(
            'header-menu' => __('Menu do topo')
        )
    );
    register_nav_menus(
        array(
            'blog-menu' => __('Menu do blog')
        )
    );
}
add_action('init', 'register_my_menus');


// Post types

function meus_posts_type() {
    register_post_type(
        'blog',
        array(
            'labels' => array('name' => 'blog'),
            'public' => true,
            'menu_position' => 0,
            'supports' => array('title', 'editor', 'thumbnail'),
            'menu_icon' => 'dashicons-admin-site'
        )
    );
}
add_action('init', 'meus_posts_type');

// filtro

function registrando_taxonomia()
{
    register_taxonomy(
        'posts',
        'blog',
        array(
            'labels' => array('name' => 'Tipo'),
            'hierarchical' => true
        )
    );
}

add_action('init', 'registrando_taxonomia');

function custom_excerpt_length( $length ) {
    return 10;
}
add_filter( 'excerpt_length', 'custom_excerpt_length', 10 );





