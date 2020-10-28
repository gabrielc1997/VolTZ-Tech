<section class="hidden-xs recent-post" style="padding-top: 130px;" id="recentPOST">
    <?php
    $the_query = new WP_Query(array(
        'posts_per_page' => 1,
        'category_name' => 'blog'

    ));

    ?>
    <div class="container">


        <div class="row">

            <div class="col-12">
                <div class=" content-card-post d-flex">
                    <div class="img-post">
                        <a href="<?php the_permalink(); ?>" class="" data-lightbox="roadtrip" data-title="<?php the_content(); ?>">
                            <?php if ($the_query->have_posts()) : ?>
                                <?php while ($the_query->have_posts()) : $the_query->the_post(); ?>


                                    <?php
                                    if (get_the_post_thumbnail($value->ID)) {
                                        echo get_the_post_thumbnail($value->ID, $size = 'post-thumbnail', array('class' => 'img-fluid'));
                                    } else {
                                    ?>
                                        <img src="http://via.placeholder.com/650x400" class="d-none" alt="" />
                                    <?php } ?>
                        </a>
                    </div>
                    <div class="content-text">
                        <a href="<?php the_permalink(); ?>" class="" data-lightbox="roadtrip" data-title="<?php the_content(); ?>">
                            <?php $categoria = get_the_category()[0]; ?>
                            <p class="<?= $class_color[$categoria->term_id] ?> upper category-style">
                                <?= $categoria->name ?>
                            </p>
                            <h1 class="mt-md-0 pt-lg-0 pb-lg-10 recent-post-title">

                                <?= get_the_title(); ?>
                            </h1>

                            <p class="recent-post-content"><?= get_the_excerpt(); ?></p>



                            <p class="pt-sm-30 recent-post-date">
                                <?php the_time(get_option('date_format')); ?> | Por
                                <?php the_author_posts_link() ?>
                            </p>
                        </a>
                    </div>
                </div>
            </div>





        <?php endwhile; ?>
        <?php wp_reset_postdata(); ?>
    <?php else : ?>
    <?php endif; ?>

        </div>



    </div>
</section>