<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Planet_Mado
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<?php if ( ! is_front_page() ) : ?>
	<header class="entry-header">
		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
	</header><!-- .entry-header -->
	<?php endif; ?>

	<?php planet_mado_post_thumbnail(); ?>
	<?php //if ( is_front_page() ) :
		//echo do_shortcode('[smartslider3 slider="2"]');
	//endif; ?>
	<div class="entry-content">
		
		<?php
		the_content();

		wp_link_pages(
			array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'planet-mado' ),
				'after'  => '</div>',
			)
		);
		?>
		

	</div><!-- .entry-content -->
	
		<?php if ( is_front_page() ) {
		?><div class="entry-content"><?php
		$catID = 400;
		$catquery = new WP_Query( 'cat=400&posts_per_page=-1' ); ?>
		<div class="">
			<h2 class="sketchy-underline">Updates</h2>
			<ul class="news-list">
				<?php while($catquery->have_posts()) : $catquery->the_post(); ?>
				<li><a class="news-img" href="<?php the_permalink() ?>" rel="bookmark"><?php the_post_thumbnail( 'thumbnail' ); ?></a><span class="news-info"><h4><a class="" href="<?php the_permalink() ?>" rel="bookmark"><?php the_title(); ?></a></h4><span class="news-excerpt"><?php the_excerpt(); ?></span></span></li>
				<?php endwhile;
		wp_reset_postdata();
				?>
			</ul>
		</div>
	</div>
		<?php } ?>
	
	
	
</article><!-- #post-<?php the_ID(); ?> -->
