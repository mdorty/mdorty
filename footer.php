<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Planet_Mado
 */

?>

	<footer id="colophon" class="site-footer">
		<div class="footer-row wrapper">
			<?php if(is_active_sidebar( 'footer-1' )) { ?>
				<?php dynamic_sidebar( 'footer-1' ); ?>
			<?php } ?>
			<?php if(is_active_sidebar( 'footer-2' )) { ?>
				<?php dynamic_sidebar( 'footer-2' ); ?>
			<?php } ?>
			<?php if(is_active_sidebar( 'footer-3' )) { ?>
				<?php dynamic_sidebar( 'footer-3' ); ?>
			<?php } ?>
			<?php if(is_active_sidebar( 'footer-4' )) { ?>
				<?php dynamic_sidebar( 'footer-4' ); ?>
			<?php } ?>
			<?php if(is_active_sidebar( 'footer-5' )) { ?>
				<?php dynamic_sidebar( 'footer-5' ); ?>
			<?php } ?>
		</div>
		<div class="footer-row wrapper">
			<span><a href="/privacy-policy/">Privacy Policy</a></span>
			<span class="footer-copyright">&copy; <?php echo currentYear(); ?> Planet Mado</span>
		</div>
		
	</footer>
	<div class="sub-footer wrapper">
		<?php if(is_active_sidebar( 'footer-disclaimer' )) { ?>
				<?php dynamic_sidebar( 'footer-disclaimer' ); ?>
		<?php } ?>
	</div>
<!-- #colophon --><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>
